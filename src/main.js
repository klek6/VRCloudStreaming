// Importing Firebase utilities for handling real-time database operations
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, onSnapshot } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlHOCK0h_cD2_SjWFBqBV7ODqJAfqHLF8",
  authDomain: "webrtc-webxr.firebaseapp.com",
  projectId: "webrtc-webxr",
  storageBucket: "webrtc-webxr.appspot.com",
  messagingSenderId: "253134015381",
  appId: "1:253134015381:web:c7ff945e621d615bbe449c",
  measurementId: "G-5LGETHTH9V"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// RTCPeerConnection configuration
const servers = {
  iceServers: [{ urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'] }],
  iceCandidatePoolSize: 10,
};

// Create a peer connection instance
const pc = new RTCPeerConnection(servers);

// Stream variables
let localStream = null;
let remoteStream = null;

// DOM elements
const startBtn = document.getElementById('startBtn');
const joinBtn = document.getElementById('joinBtn');
const vrBtn = document.getElementById('vrBtn');
const localVideoStream = document.getElementById('localVideoStream');
const remoteVideoStream = document.getElementById('remoteVideoStream');
const localStreamDiv = document.getElementById('localStream');
const remoteStreamDiv = document.getElementById('remoteStream');
const vrScene = document.getElementById('vrScene');
const vrVideo = document.getElementById('vrVideo');

// Initiate a call
async function initiateCall() {
  localStreamDiv.style.display = 'block';
  
  localStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
  localStream.getTracks().forEach(track => pc.addTrack(track, localStream));
  localVideoStream.srcObject = localStream;

  const callDocRef = doc(collection(firestore, 'calls'));
  setupIceCandidateHandling(callDocRef, 'offerCandidates');
  
  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);
  await setDoc(callDocRef, { offer: { type: offerDescription.type, sdp: offerDescription.sdp } });

  await setDoc(doc(firestore, 'currentCall', 'activeCall'), { callId: callDocRef.id });

  monitorCallAnswer(callDocRef);
}

// Join an existing call
async function joinCall() {
  remoteStreamDiv.style.display = 'block';
  
  remoteStream = new MediaStream();
  pc.ontrack = event => event.streams[0].getTracks().forEach(track => remoteStream.addTrack(track));
  remoteVideoStream.srcObject = remoteStream;

  const currentCallDoc = await getCurrentCall();
  if (!currentCallDoc) return; // Exit if there's no call ID

  const callDocRef = doc(firestore, 'calls', currentCallDoc.callId);
  setupIceCandidateHandling(callDocRef, 'answerCandidates');

  const callData = (await getDoc(callDocRef)).data();
  await pc.setRemoteDescription(new RTCSessionDescription(callData.offer));
  
  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);
  await setDoc(callDocRef, { answer: { type: answerDescription.type, sdp: answerDescription.sdp } }, { merge: true });

  monitorCallCandidates(callDocRef, 'offerCandidates');
}

// Utility function to setup handling of ICE candidates
function setupIceCandidateHandling(docRef, subcollection) {
  const candidatesCollection = collection(docRef, subcollection);
  pc.onicecandidate = event => {
    if (event.candidate) {
      addDoc(candidatesCollection, event.candidate.toJSON());
    }
  };
}

// Utility function to monitor for call answers
async function monitorCallAnswer(docRef) {
  onSnapshot(docRef, async snapshot => {
    const data = snapshot.data();
    if (data?.answer && !pc.currentRemoteDescription) {
      await pc.setRemoteDescription(new RTCSessionDescription(data.answer));
    }
  });
}

// Utility function to monitor ICE candidates
function monitorCallCandidates(docRef, subcollection) {
  const candidatesCollection = collection(docRef, subcollection);
  onSnapshot(candidatesCollection, snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        pc.addIceCandidate(new RTCIceCandidate(change.doc.data()));
      }
    });
  });
}

// Utility function to get the current call document
async function getCurrentCall() {
  const docSnap = await getDoc(doc(firestore, 'currentCall', 'activeCall'));
  return docSnap.exists() ? docSnap.data() : null;
}

// Event handlers for buttons
startBtn.onclick = initiateCall;
joinBtn.onclick = joinCall;
vrBtn.onclick = () => {
  const stream = remoteVideoStream.srcObject;
  vrVideo.srcObject = stream;
  vrVideo.onloadedmetadata = () => {
    vrVideo.play();
    vrScene.style.display = 'block';
    document.querySelector('a-videosphere').setAttribute('src', '#vrVideo');
  };
};