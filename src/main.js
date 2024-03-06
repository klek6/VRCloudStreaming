import './style.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlHOCK0h_cD2_SjWFBqBV7ODqJAfqHLF8",
  authDomain: "webrtc-webxr.firebaseapp.com",
  databaseURL: "https://webrtc-webxr-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webrtc-webxr",
  storageBucket: "webrtc-webxr.appspot.com",
  messagingSenderId: "253134015381",
  appId: "1:253134015381:web:c7ff945e621d615bbe449c",
  measurementId: "G-5LGETHTH9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

// Global State
const pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;

// HTML elements
const webcamButton = document.getElementById('webcamButton');
const webcamVideo = document.getElementById('webcamVideo');
const answerButton = document.getElementById('answerButton');
const remoteVideo = document.getElementById('remoteVideo');
const localStreamSpan = document.getElementById('localStream');
const remoteStreamSpan = document.getElementById('remoteStream');

// 1. Setup media sources
webcamButton.onclick = async () => {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  localStream.getTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });
  webcamVideo.srcObject = localStream;
  remoteStreamSpan.style.display = 'none';
  initiateCall();
};

function makeRemoteStream() {
  remoteStream = new MediaStream();
  pc.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };
  remoteVideo.srcObject = remoteStream;
}

async function initiateCall() {
  const callDocRef = doc(collection(firestore, 'calls'));
  const offerCandidates = collection(callDocRef, 'offerCandidates');
  const answerCandidates = collection(callDocRef, 'answerCandidates');

  const currentCallDocRef = doc(firestore, 'currentCall', 'activeCall');
  await setDoc(currentCallDocRef, { callId: callDocRef.id });

  pc.onicecandidate = (event) => {
    event.candidate && addDoc(offerCandidates, event.candidate.toJSON());
  };

  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);

  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type,
  };

  await setDoc(callDocRef, { offer });

  onSnapshot(callDocRef, (snapshot) => {
    const data = snapshot.data();
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(data.answer);
      pc.setRemoteDescription(answerDescription);
    }
  });

  onSnapshot(answerCandidates, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const candidate = new RTCIceCandidate(change.doc.data());
        pc.addIceCandidate(candidate);
      }
    });
  });
}

answerButton.onclick = async () => {
  localStreamSpan.style.display = 'none';
  makeRemoteStream();

  const currentCallDocRef = doc(firestore, 'currentCall', 'activeCall');
  const currentCallDocSnap = await getDoc(currentCallDocRef);
  const callId = currentCallDocSnap.exists() ? currentCallDocSnap.data().callId : null;

  if (!callId) {
    console.error('No active call ID found');
    return; // Exit if there's no call ID to work with
  }

  const callDocRef = doc(firestore, 'calls', callId);
  const answerCandidates = collection(callDocRef, 'answerCandidates');
  const offerCandidates = collection(callDocRef, 'offerCandidates');

  pc.onicecandidate = (event) => {
    event.candidate && addDoc(answerCandidates, event.candidate.toJSON());
  };

  const callDocSnap = await getDoc(callDocRef);
  const callData = callDocSnap.data();
  const offerDescription = callData.offer;
  await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const answer = {
    type: answerDescription.type,
    sdp: answerDescription.sdp,
  };

  await setDoc(callDocRef, { answer }, { merge: true });

  onSnapshot(offerCandidates, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        let data = change.doc.data();
        pc.addIceCandidate(new RTCIceCandidate(data));
      }
    });
  });
};
