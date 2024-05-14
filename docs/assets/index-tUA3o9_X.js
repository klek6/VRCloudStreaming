(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var yi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},lu=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ao={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),r.push(n[l],n[h],n[f],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(wo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):lu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new hu;const f=i<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const S=u<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class hu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const du=function(e){const t=wo(e);return Ao.encodeByteArray(t,!0)},Dn=function(e){return du(e).replace(/\./g,"")},fu=function(e){try{return Ao.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=()=>mu().__FIREBASE_DEFAULTS__,gu=()=>{if(typeof process>"u"||typeof yi>"u")return;const e=yi.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},_u=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&fu(e[1]);return t&&JSON.parse(t)},Es=()=>{try{return pu()||gu()||_u()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},yu=e=>{var t,n;return(n=(t=Es())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Eu=e=>{const t=yu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ro=()=>{var e;return(e=Es())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Dn(JSON.stringify(n)),Dn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Iu(){var e;const t=(e=Es())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wu(){return!Iu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function So(){try{return typeof indexedDB=="object"}catch{return!1}}function Au(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="FirebaseError";class ge extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ru,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Su(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ge(s,a,r)}}function Su(e,t){return e.replace(Pu,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Pu=/\{\$([^}]+)}/g;function qr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ei(i)&&Ei(o)){if(!qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ei(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return e&&e._delegate?e._delegate:e}class Le{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new vu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Du(t))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Mt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mt){return this.instances.has(t)}getOptions(t=Mt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vu(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Mt){return this.component?this.component.multipleInstances?t:Mt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vu(e){return e===Mt?void 0:e}function Du(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Cu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const Nu={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},ku=V.INFO,Ou={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},xu=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Ou[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Co{constructor(t){this.name=t,this._logLevel=ku,this._logHandler=xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Mu=(e,t)=>t.some(n=>e instanceof n);let vi,Ti;function Lu(){return vi||(vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fu(){return Ti||(Ti=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vo=new WeakMap,$r=new WeakMap,Do=new WeakMap,Ar=new WeakMap,vs=new WeakMap;function Bu(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ct(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Vo.set(n,e)}).catch(()=>{}),vs.set(t,e),t}function Uu(e){if($r.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});$r.set(e,t)}let zr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $r.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Do.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ju(e){zr=e(zr)}function qu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Rr(this),t,...n);return Do.set(r,t.sort?t.sort():[t]),Ct(r)}:Fu().includes(e)?function(...t){return e.apply(Rr(this),t),Ct(Vo.get(this))}:function(...t){return Ct(e.apply(Rr(this),t))}}function $u(e){return typeof e=="function"?qu(e):(e instanceof IDBTransaction&&Uu(e),Mu(e,Lu())?new Proxy(e,zr):e)}function Ct(e){if(e instanceof IDBRequest)return Bu(e);if(Ar.has(e))return Ar.get(e);const t=$u(e);return t!==e&&(Ar.set(e,t),vs.set(t,e)),t}const Rr=e=>vs.get(e);function zu(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Ct(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Ku=["get","getKey","getAll","getAllKeys","count"],Gu=["put","add","delete","clear"],Sr=new Map;function Ii(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Sr.get(t))return Sr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Gu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ku.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Sr.set(t,i),i}ju(e=>({...e,get:(t,n,r)=>Ii(t,n)||e.get(t,n,r),has:(t,n)=>!!Ii(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kr="@firebase/app",wi="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Co("@firebase/app"),Wu="@firebase/app-compat",Xu="@firebase/analytics-compat",Yu="@firebase/analytics",Ju="@firebase/app-check-compat",Zu="@firebase/app-check",tl="@firebase/auth",el="@firebase/auth-compat",nl="@firebase/database",rl="@firebase/database-compat",sl="@firebase/functions",il="@firebase/functions-compat",ol="@firebase/installations",al="@firebase/installations-compat",cl="@firebase/messaging",ul="@firebase/messaging-compat",ll="@firebase/performance",hl="@firebase/performance-compat",dl="@firebase/remote-config",fl="@firebase/remote-config-compat",ml="@firebase/storage",pl="@firebase/storage-compat",gl="@firebase/firestore",_l="@firebase/firestore-compat",yl="firebase",El="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]",vl={[Kr]:"fire-core",[Wu]:"fire-core-compat",[Yu]:"fire-analytics",[Xu]:"fire-analytics-compat",[Zu]:"fire-app-check",[Ju]:"fire-app-check-compat",[tl]:"fire-auth",[el]:"fire-auth-compat",[nl]:"fire-rtdb",[rl]:"fire-rtdb-compat",[sl]:"fire-fn",[il]:"fire-fn-compat",[ol]:"fire-iid",[al]:"fire-iid-compat",[cl]:"fire-fcm",[ul]:"fire-fcm-compat",[ll]:"fire-perf",[hl]:"fire-perf-compat",[dl]:"fire-rc",[fl]:"fire-rc-compat",[ml]:"fire-gcs",[pl]:"fire-gcs-compat",[gl]:"fire-fst",[_l]:"fire-fst-compat","fire-js":"fire-js",[yl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Map,Hr=new Map;function Tl(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function kn(e){const t=e.name;if(Hr.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Hr.set(t,e);for(const n of Nn.values())Tl(n,e);return!0}function Il(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new Po("app","Firebase",wl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=El;function bo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(n||(n=Ro()),!n)throw Vt.create("no-options");const i=Nn.get(s);if(i){if(qr(n,i.options)&&qr(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const o=new bu(s);for(const c of Hr.values())o.addComponent(c);const a=new Al(n,r,o);return Nn.set(s,a),a}function Sl(e=Gr){const t=Nn.get(e);if(!t&&e===Gr&&Ro())return bo();if(!t)throw Vt.create("no-app",{appName:e});return t}function ne(e,t,n){var r;let s=(r=vl[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}kn(new Le(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="firebase-heartbeat-database",Cl=1,Fe="firebase-heartbeat-store";let Pr=null;function No(){return Pr||(Pr=zu(Pl,Cl,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Fe)}catch(n){console.warn(n)}}}}).catch(e=>{throw Vt.create("idb-open",{originalErrorMessage:e.message})})),Pr}async function Vl(e){try{const n=(await No()).transaction(Fe),r=await n.objectStore(Fe).get(ko(e));return await n.done,r}catch(t){if(t instanceof ge)$t.warn(t.message);else{const n=Vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function Ai(e,t){try{const r=(await No()).transaction(Fe,"readwrite");await r.objectStore(Fe).put(t,ko(e)),await r.done}catch(n){if(n instanceof ge)$t.warn(n.message);else{const r=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function ko(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=1024,bl=30*24*60*60*1e3;class Nl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ol(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ri();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ri(),{heartbeatsToSend:r,unsentEntries:s}=kl(this._heartbeatsCache.heartbeats),i=Dn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ri(){return new Date().toISOString().substring(0,10)}function kl(e,t=Dl){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Si(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Si(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ol{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return So()?Au().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ai(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ai(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Si(e){return Dn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(e){kn(new Le("platform-logger",t=>new Hu(t),"PRIVATE")),kn(new Le("heartbeat",t=>new Nl(t),"PRIVATE")),ne(Kr,wi,e),ne(Kr,wi,"esm2017"),ne("fire-js","")}xl("");var Ml="firebase",Ll="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ne(Ml,Ll,"app");var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,Ts=Ts||{},I=Fl||self;function Wn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function tn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Bl(e){return Object.prototype.hasOwnProperty.call(e,Cr)&&e[Cr]||(e[Cr]=++Ul)}var Cr="closure_uid_"+(1e9*Math.random()>>>0),Ul=0;function jl(e,t,n){return e.call.apply(e.bind,arguments)}function ql(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function tt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=jl:tt=ql,tt.apply(null,arguments)}function _n(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ot(){this.s=this.s,this.o=this.o}var $l=0;Ot.prototype.s=!1;Ot.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),$l!=0)&&Bl(this)};Ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Oo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Is(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Pi(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wn(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var zl=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};I.addEventListener("test",n,t),I.removeEventListener("test",n,t)}catch{}return e}();function Be(e){return/^[\s\xa0]*$/.test(e)}function Xn(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function dt(e){return Xn().indexOf(e)!=-1}function ws(e){return ws[" "](e),e}ws[" "]=function(){};function Kl(e,t){var n=Lh;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Gl=dt("Opera"),ae=dt("Trident")||dt("MSIE"),xo=dt("Edge"),Qr=xo||ae,Mo=dt("Gecko")&&!(Xn().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),Hl=Xn().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function Lo(){var e=I.document;return e?e.documentMode:void 0}var Wr;t:{var Vr="",Dr=function(){var e=Xn();if(Mo)return/rv:([^\);]+)(\)|;)/.exec(e);if(xo)return/Edge\/([\d\.]+)/.exec(e);if(ae)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Hl)return/WebKit\/(\S+)/.exec(e);if(Gl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Dr&&(Vr=Dr?Dr[1]:""),ae){var br=Lo();if(br!=null&&br>parseFloat(Vr)){Wr=String(br);break t}}Wr=Vr}var Xr;if(I.document&&ae){var Ci=Lo();Xr=Ci||parseInt(Wr,10)||void 0}else Xr=void 0;var Ql=Xr;function Ue(e,t){if(et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Mo){t:{try{ws(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Wl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ue.$.h.call(this)}}z(Ue,et);var Wl={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),Xl=0;function Yl(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Xl,this.fa=this.ia=!1}function Yn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function As(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Jl(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Fo(e){const t={};for(const n in e)t[n]=e[n];return t}const Vi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bo(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Vi.length;i++)n=Vi[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Jn(e){this.src=e,this.g={},this.h=0}Jn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Jr(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Yl(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Yr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Oo(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Yn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Jr(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Rs="closure_lm_"+(1e6*Math.random()|0),Nr={};function Uo(e,t,n,r,s){if(r&&r.once)return qo(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Uo(e,t[i],n,r,s);return null}return n=Cs(n),e&&e[en]?e.O(t,n,tn(r)?!!r.capture:!!r,s):jo(e,t,n,!1,r,s)}function jo(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=tn(s)?!!s.capture:!!s,a=Ps(e);if(a||(e[Rs]=a=new Jn(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Zl(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)zl||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(zo(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Zl(){function e(n){return t.call(e.src,e.listener,n)}const t=th;return e}function qo(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)qo(e,t[i],n,r,s);return null}return n=Cs(n),e&&e[en]?e.P(t,n,tn(r)?!!r.capture:!!r,s):jo(e,t,n,!0,r,s)}function $o(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)$o(e,t[i],n,r,s);else r=tn(r)?!!r.capture:!!r,n=Cs(n),e&&e[en]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Jr(i,n,r,s),-1<n&&(Yn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ps(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Jr(t,n,r,s)),(n=-1<e?t[e]:null)&&Ss(n))}function Ss(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[en])Yr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(zo(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ps(t))?(Yr(n,e),n.h==0&&(n.src=null,t[Rs]=null)):Yn(e)}}}function zo(e){return e in Nr?Nr[e]:Nr[e]="on"+e}function th(e,t){if(e.fa)e=!0;else{t=new Ue(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ss(e),e=n.call(r,t)}return e}function Ps(e){return e=e[Rs],e instanceof Jn?e:null}var kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cs(e){return typeof e=="function"?e:(e[kr]||(e[kr]=function(t){return e.handleEvent(t)}),e[kr])}function $(){Ot.call(this),this.i=new Jn(this),this.S=this,this.J=null}z($,Ot);$.prototype[en]=!0;$.prototype.removeEventListener=function(e,t,n,r){$o(this,e,t,n,r)};function W(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new et(t,e);else if(t instanceof et)t.target=t.target||e;else{var s=t;t=new et(r,e),Bo(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=yn(o,r,!0,t)&&s}if(o=t.g=e,s=yn(o,r,!0,t)&&s,s=yn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=yn(o,r,!1,t)&&s}$.prototype.N=function(){if($.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Yn(n[r]);delete e.g[t],e.h--}}this.J=null};$.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};$.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function yn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Yr(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Vs=I.JSON.stringify;class eh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function nh(){var e=Ds;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class rh{constructor(){this.h=this.g=null}add(t,n){const r=Ko.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ko=new eh(()=>new sh,e=>e.reset());class sh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ih(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function oh(e){I.setTimeout(()=>{throw e},0)}let je,qe=!1,Ds=new rh,Go=()=>{const e=I.Promise.resolve(void 0);je=()=>{e.then(ah)}};var ah=()=>{for(var e;e=nh();){try{e.h.call(e.g)}catch(n){oh(n)}var t=Ko;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}qe=!1};function Zn(e,t){$.call(this),this.h=e||1,this.g=t||I,this.j=tt(this.qb,this),this.l=Date.now()}z(Zn,$);_=Zn.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),W(this,"tick"),this.ga&&(bs(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}_.N=function(){Zn.$.N.call(this),bs(this),delete this.g};function Ns(e,t,n){if(typeof e=="function")n&&(e=tt(e,n));else if(e&&typeof e.handleEvent=="function")e=tt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function Ho(e){e.g=Ns(()=>{e.g=null,e.i&&(e.i=!1,Ho(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ch extends Ot{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ho(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){Ot.call(this),this.h=e,this.g={}}z($e,Ot);var Di=[];function Qo(e,t,n,r){Array.isArray(n)||(n&&(Di[0]=n.toString()),n=Di);for(var s=0;s<n.length;s++){var i=Uo(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Wo(e){As(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ss(t)},e),e.g={}}$e.prototype.N=function(){$e.$.N.call(this),Wo(this)};$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tr(){this.g=!0}tr.prototype.Ea=function(){this.g=!1};function uh(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function lh(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function ee(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+dh(e,n)+(r?" "+r:"")})}function hh(e,t){e.info(function(){return"TIMEOUT: "+t})}tr.prototype.info=function(){};function dh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Vs(n)}catch{return t}}var Ht={},bi=null;function er(){return bi=bi||new $}Ht.Ta="serverreachability";function Xo(e){et.call(this,Ht.Ta,e)}z(Xo,et);function ze(e){const t=er();W(t,new Xo(t))}Ht.STAT_EVENT="statevent";function Yo(e,t){et.call(this,Ht.STAT_EVENT,e),this.stat=t}z(Yo,et);function rt(e){const t=er();W(t,new Yo(t,e))}Ht.Ua="timingevent";function Jo(e,t){et.call(this,Ht.Ua,e),this.size=t}z(Jo,et);function nn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var nr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Zo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ks(){}ks.prototype.h=null;function Ni(e){return e.h||(e.h=e.i())}function ta(){}var rn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Os(){et.call(this,"d")}z(Os,et);function xs(){et.call(this,"c")}z(xs,et);var Zr;function rr(){}z(rr,ks);rr.prototype.g=function(){return new XMLHttpRequest};rr.prototype.i=function(){return{}};Zr=new rr;function sn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new $e(this),this.P=fh,e=Qr?125:void 0,this.V=new Zn(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ea}function ea(){this.i=null,this.g="",this.h=!1}var fh=45e3,na={},ts={};_=sn.prototype;_.setTimeout=function(e){this.P=e};function es(e,t,n){e.L=1,e.A=ir(Rt(t)),e.u=n,e.S=!0,ra(e,null)}function ra(e,t){e.G=Date.now(),on(e),e.B=Rt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),ha(n.i,"t",r),e.o=0,n=e.l.J,e.h=new ea,e.g=Na(e.l,n?t:null,!e.u),0<e.O&&(e.M=new ch(tt(e.Pa,e,e.g),e.O)),Qo(e.U,e.g,"readystatechange",e.nb),t=e.I?Fo(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ze(),uh(e.j,e.v,e.B,e.m,e.W,e.u)}_.nb=function(e){e=e.target;const t=this.M;t&&ft(e)==3?t.l():this.Pa(e)};_.Pa=function(e){try{if(e==this.g)t:{const l=ft(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Qr||this.g&&(this.h.h||this.g.ja()||Mi(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?ze(3):ze(2)),sr(this);var n=this.g.da();this.ca=n;e:if(sa(this)){var r=Mi(this.g);e="";var s=r.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),be(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,lh(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Be(a)){var u=a;break e}}u=null}if(n=u)ee(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ns(this,n);else{this.i=!1,this.s=3,rt(12),Ft(this),be(this);break t}}this.S?(ia(this,l,o),Qr&&this.i&&l==3&&(Qo(this.U,this.V,"tick",this.mb),this.V.start())):(ee(this.j,this.m,o,null),ns(this,o)),l==4&&Ft(this),this.i&&!this.J&&(l==4?Ca(this.l,this):(this.i=!1,on(this)))}else Oh(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Ft(this),be(this)}}}catch{}finally{}};function sa(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function ia(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=mh(e,n),s==ts){t==4&&(e.s=4,rt(14),r=!1),ee(e.j,e.m,null,"[Incomplete Response]");break}else if(s==na){e.s=4,rt(15),ee(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ee(e.j,e.m,s,null),ns(e,s);sa(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,rt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),js(t),t.M=!0,rt(11))):(ee(e.j,e.m,n,"[Invalid Chunked Response]"),Ft(e),be(e))}_.mb=function(){if(this.g){var e=ft(this.g),t=this.g.ja();this.o<t.length&&(sr(this),ia(this,e,t),this.i&&e!=4&&on(this))}};function mh(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?ts:(n=Number(t.substring(n,r)),isNaN(n)?na:(r+=1,r+n>t.length?ts:(t=t.slice(r,r+n),e.o=r+n,t)))}_.cancel=function(){this.J=!0,Ft(this)};function on(e){e.Y=Date.now()+e.P,oa(e,e.P)}function oa(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=nn(tt(e.lb,e),t)}function sr(e){e.C&&(I.clearTimeout(e.C),e.C=null)}_.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(hh(this.j,this.B),this.L!=2&&(ze(),rt(17)),Ft(this),this.s=2,be(this)):oa(this,this.Y-e)};function be(e){e.l.H==0||e.J||Ca(e.l,e)}function Ft(e){sr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,bs(e.V),Wo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ns(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||rs(n.i,e))){if(!e.K&&rs(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Mn(n),ur(n);else break t;Us(n),rt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=nn(tt(n.ib,n),6e3));if(1>=ma(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Bt(n,11)}else if((e.K||n.g==e)&&Mn(n),!Be(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const S=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var i=r.i;i.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ms(i,i.h),i.h=null))}if(r.F){const R=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,k(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=ba(r,r.J?r.pa:null,r.Y),o.K){pa(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(sr(a),on(a)),r.g=o}else Sa(r);0<n.j.length&&lr(n)}else u[0]!="stop"&&u[0]!="close"||Bt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Bt(n,7):Bs(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ze(4)}catch{}}function ph(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Wn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function gh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Wn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function aa(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Wn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=gh(e),r=ph(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var ca=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _h(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qt){this.h=e.h,On(this,e.j),this.s=e.s,this.g=e.g,xn(this,e.m),this.l=e.l;var t=e.i,n=new Ke;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ki(this,n),this.o=e.o}else e&&(t=String(e).match(ca))?(this.h=!1,On(this,t[1]||"",!0),this.s=Se(t[2]||""),this.g=Se(t[3]||"",!0),xn(this,t[4]),this.l=Se(t[5]||"",!0),ki(this,t[6]||"",!0),this.o=Se(t[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}qt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Pe(t,Oi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Pe(t,Oi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Pe(n,n.charAt(0)=="/"?vh:Eh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Pe(n,Ih)),e.join("")};function Rt(e){return new qt(e)}function On(e,t,n){e.j=n?Se(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function xn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ki(e,t,n){t instanceof Ke?(e.i=t,wh(e.i,e.h)):(n||(t=Pe(t,Th)),e.i=new Ke(t,e.h))}function k(e,t,n){e.i.set(t,n)}function ir(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Se(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Pe(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,yh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function yh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Oi=/[#\/\?@]/g,Eh=/[#\?:]/g,vh=/[#\?]/g,Th=/[#\?@]/g,Ih=/#/g;function Ke(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function xt(e){e.g||(e.g=new Map,e.h=0,e.i&&_h(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}_=Ke.prototype;_.add=function(e,t){xt(this),this.i=null,e=_e(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ua(e,t){xt(e),t=_e(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function la(e,t){return xt(e),t=_e(e,t),e.g.has(t)}_.forEach=function(e,t){xt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};_.ta=function(){xt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};_.Z=function(e){xt(this);let t=[];if(typeof e=="string")la(this,e)&&(t=t.concat(this.g.get(_e(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};_.set=function(e,t){return xt(this),this.i=null,e=_e(this,e),la(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};_.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ha(e,t,n){ua(e,t),0<n.length&&(e.i=null,e.g.set(_e(e,t),Is(n)),e.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function _e(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wh(e,t){t&&!e.j&&(xt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ua(this,r),ha(this,s,n))},e)),e.j=t}var Ah=class{constructor(e,t){this.g=e,this.map=t}};function da(e){this.l=e||Rh,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rh=10;function fa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ma(e){return e.h?1:e.g?e.g.size:0}function rs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ms(e,t){e.g?e.g.add(t):e.h=t}function pa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}da.prototype.cancel=function(){if(this.i=ga(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ga(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Is(e.i)}var Sh=class{stringify(e){return I.JSON.stringify(e,void 0)}parse(e){return I.JSON.parse(e,void 0)}};function Ph(){this.g=new Sh}function Ch(e,t,n){const r=n||"";try{aa(e,function(s,i){let o=s;tn(s)&&(o=Vs(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Vh(e,t){const n=new tr;if(I.Image){const r=new Image;r.onload=_n(En,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_n(En,n,r,"TestLoadImage: error",!1,t),r.onabort=_n(En,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_n(En,n,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function En(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function or(e){this.l=e.ec||null,this.j=e.ob||!1}z(or,ks);or.prototype.g=function(){return new ar(this.l,this.j)};or.prototype.i=function(e){return function(){return e}}({});function ar(e,t){$.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ls,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(ar,$);var Ls=0;_=ar.prototype;_.open=function(e,t){if(this.readyState!=Ls)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ge(this)};_.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,an(this)),this.readyState=Ls};_.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ge(this)),this.g&&(this.readyState=3,Ge(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_a(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function _a(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}_.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?an(this):Ge(this),this.readyState==3&&_a(this)}};_.Za=function(e){this.g&&(this.response=this.responseText=e,an(this))};_.Ya=function(e){this.g&&(this.response=e,an(this))};_.ka=function(){this.g&&an(this)};function an(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ge(e)}_.setRequestHeader=function(e,t){this.v.append(e,t)};_.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ge(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Dh=I.JSON.parse;function L(e){$.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ya,this.L=this.M=!1}z(L,$);var ya="",bh=/^https?$/i,Nh=["POST","PUT"];_=L.prototype;_.Oa=function(e){this.M=e};_.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Zr.g(),this.C=this.u?Ni(this.u):Ni(Zr),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){xi(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=I.FormData&&e instanceof I.FormData,!(0<=Oo(Nh,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ta(this),0<this.B&&((this.L=kh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=Ns(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){xi(this,i)}};function kh(e){return ae&&typeof e.timeout=="number"&&e.ontimeout!==void 0}_.ua=function(){typeof Ts<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function xi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ea(e),cr(e)}function Ea(e){e.F||(e.F=!0,W(e,"complete"),W(e,"error"))}_.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),cr(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cr(this,!0)),L.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?va(this):this.kb())};_.kb=function(){va(this)};function va(e){if(e.h&&typeof Ts<"u"&&(!e.C[1]||ft(e)!=4||e.da()!=2)){if(e.v&&ft(e)==4)Ns(e.La,0,e);else if(W(e,"readystatechange"),ft(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(ca)[1]||null;!s&&I.self&&I.self.location&&(s=I.self.location.protocol.slice(0,-1)),r=!bh.test(s?s.toLowerCase():"")}n=r}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var i=2<ft(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Ea(e)}}finally{cr(e)}}}}function cr(e,t){if(e.g){Ta(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ta(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}_.isActive=function(){return!!this.g};function ft(e){return e.g?e.g.readyState:0}_.da=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Dh(t)}};function Mi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ya:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Oh(e){const t={};e=(e.g&&2<=ft(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Be(e[r]))continue;var n=ih(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Jl(t,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ia(e){let t="";return As(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Fs(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Ia(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function we(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function wa(e){this.Ga=0,this.j=[],this.l=new tr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=we("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=we("baseRetryDelayMs",5e3,e),this.hb=we("retryDelaySeedMs",1e4,e),this.eb=we("forwardChannelMaxRetries",2,e),this.xa=we("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new da(e&&e.concurrentRequestLimit),this.Ja=new Ph,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=wa.prototype;_.ra=8;_.H=1;function Bs(e){if(Aa(e),e.H==3){var t=e.W++,n=Rt(e.I);if(k(n,"SID",e.K),k(n,"RID",t),k(n,"TYPE","terminate"),cn(e,n),t=new sn(e,e.l,t),t.L=2,t.A=ir(Rt(n)),n=!1,I.navigator&&I.navigator.sendBeacon)try{n=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&I.Image&&(new Image().src=t.A,n=!0),n||(t.g=Na(t.l,null),t.g.ha(t.A)),t.G=Date.now(),on(t)}Da(e)}function ur(e){e.g&&(js(e),e.g.cancel(),e.g=null)}function Aa(e){ur(e),e.u&&(I.clearTimeout(e.u),e.u=null),Mn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function lr(e){if(!fa(e.i)&&!e.m){e.m=!0;var t=e.Na;je||Go(),qe||(je(),qe=!0),Ds.add(t,e),e.C=0}}function xh(e,t){return ma(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=nn(tt(e.Na,e,t),Va(e,e.C)),e.C++,!0)}_.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new sn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Fo(i),Bo(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ra(this,s,t),n=Rt(this.I),k(n,"RID",e),k(n,"CVER",22),this.F&&k(n,"X-HTTP-Session-Id",this.F),cn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Ia(i)))+"&"+t:this.o&&Fs(n,this.o,i)),Ms(this.i,s),this.bb&&k(n,"TYPE","init"),this.P?(k(n,"$req",t),k(n,"SID","null"),s.aa=!0,es(s,n,null)):es(s,n,t),this.H=2}}else this.H==3&&(e?Li(this,e):this.j.length==0||fa(this.i)||Li(this))};function Li(e,t){var n;t?n=t.m:n=e.W++;const r=Rt(e.I);k(r,"SID",e.K),k(r,"RID",n),k(r,"AID",e.V),cn(e,r),e.o&&e.s&&Fs(r,e.o,e.s),n=new sn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ra(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ms(e.i,n),es(n,r,t)}function cn(e,t){e.na&&As(e.na,function(n,r){k(t,r,n)}),e.h&&aa({},function(n,r){k(t,r,n)})}function Ra(e,t,n){n=Math.min(e.j.length,n);var r=e.h?tt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{Ch(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Sa(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;je||Go(),qe||(je(),qe=!0),Ds.add(t,e),e.A=0}}function Us(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=nn(tt(e.Ma,e),Va(e,e.A)),e.A++,!0)}_.Ma=function(){if(this.u=null,Pa(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=nn(tt(this.jb,this),e)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),ur(this),Pa(this))};function js(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Pa(e){e.g=new sn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Rt(e.wa);k(t,"RID","rpc"),k(t,"SID",e.K),k(t,"AID",e.V),k(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&k(t,"TO",e.qa),k(t,"TYPE","xmlhttp"),cn(e,t),e.o&&e.s&&Fs(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=ir(Rt(t)),n.u=null,n.S=!0,ra(n,e)}_.ib=function(){this.v!=null&&(this.v=null,ur(this),Us(this),rt(19))};function Mn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function Ca(e,t){var n=null;if(e.g==t){Mn(e),js(e),e.g=null;var r=2}else if(rs(e.i,t))n=t.F,pa(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=er(),W(r,new Jo(r,n)),lr(e)}else Sa(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&xh(e,t)||r==2&&Us(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Bt(e,5);break;case 4:Bt(e,10);break;case 3:Bt(e,6);break;default:Bt(e,2)}}}function Va(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Bt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=tt(e.pb,e);n||(n=new qt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||On(n,"https"),ir(n)),Vh(n.toString(),r)}else rt(2);e.H=0,e.h&&e.h.za(t),Da(e),Aa(e)}_.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function Da(e){if(e.H=0,e.ma=[],e.h){const t=ga(e.i);(t.length!=0||e.j.length!=0)&&(Pi(e.ma,t),Pi(e.ma,e.j),e.i.i.length=0,Is(e.j),e.j.length=0),e.h.ya()}}function ba(e,t,n){var r=n instanceof qt?Rt(n):new qt(n);if(r.g!="")t&&(r.g=t+"."+r.g),xn(r,r.m);else{var s=I.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new qt(null);r&&On(i,r),t&&(i.g=t),s&&xn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&k(r,n,t),k(r,"VER",e.ra),cn(e,r),r}function Na(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new L(new or({ob:n})):new L(e.va),t.Oa(e.J),t}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function ka(){}_=ka.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function Ln(){if(ae&&!(10<=Number(Ql)))throw Error("Environmental error: no available transport.")}Ln.prototype.g=function(e,t){return new ot(e,t)};function ot(e,t){$.call(this),this.g=new wa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Be(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Be(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ye(this)}z(ot,$);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ba(e,null,e.Y),lr(e)};ot.prototype.close=function(){Bs(this.g)};ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Vs(e),e=n);t.j.push(new Ah(t.fb++,e)),t.H==3&&lr(t)};ot.prototype.N=function(){this.g.h=null,delete this.j,Bs(this.g),delete this.g,ot.$.N.call(this)};function Oa(e){Os.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Oa,Os);function xa(){xs.call(this),this.status=1}z(xa,xs);function ye(e){this.g=e}z(ye,ka);ye.prototype.Ba=function(){W(this.g,"a")};ye.prototype.Aa=function(e){W(this.g,new Oa(e))};ye.prototype.za=function(e){W(this.g,new xa)};ye.prototype.ya=function(){W(this.g,"b")};function Mh(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ht,Mh);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Or(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}ht.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Or(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Or(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Or(this,r),s=0;break}}this.h=s,this.i+=t};ht.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function b(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Lh={};function qs(e){return-128<=e&&128>e?Kl(e,function(t){return new b([t|0],0>t?-1:0)}):new b([e|0],0>e?-1:0)}function mt(e){if(isNaN(e)||!isFinite(e))return re;if(0>e)return H(mt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ss;return new b(t,0)}function Ma(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return H(Ma(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mt(Math.pow(t,8)),r=re,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=mt(Math.pow(t,i)),r=r.R(i).add(mt(o))):(r=r.R(n),r=r.add(mt(o)))}return r}var ss=4294967296,re=qs(0),is=qs(1),Fi=qs(16777216);_=b.prototype;_.ea=function(){if(at(this))return-H(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ss+r)*t,t*=ss}return e};_.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(It(this))return"0";if(at(this))return"-"+H(this).toString(e);for(var t=mt(Math.pow(e,6)),n=this,r="";;){var s=Bn(n,t).g;n=Fn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,It(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};_.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function It(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function at(e){return e.h==-1}_.X=function(e){return e=Fn(this,e),at(e)?-1:It(e)?0:1};function H(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new b(n,~e.h).add(is)}_.abs=function(){return at(this)?H(this):this};_.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new b(n,n[n.length-1]&-2147483648?-1:0)};function Fn(e,t){return e.add(H(t))}_.R=function(e){if(It(this)||It(e))return re;if(at(this))return at(e)?H(this).R(H(e)):H(H(this).R(e));if(at(e))return H(this.R(H(e)));if(0>this.X(Fi)&&0>e.X(Fi))return mt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,vn(n,2*r+2*s),n[2*r+2*s+1]+=i*c,vn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,vn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,vn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new b(n,0)};function vn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ae(e,t){this.g=e,this.h=t}function Bn(e,t){if(It(t))throw Error("division by zero");if(It(e))return new Ae(re,re);if(at(e))return t=Bn(H(e),t),new Ae(H(t.g),H(t.h));if(at(t))return t=Bn(e,H(t)),new Ae(H(t.g),t.h);if(30<e.g.length){if(at(e)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var n=is,r=t;0>=r.X(e);)n=Bi(n),r=Bi(r);var s=Yt(n,1),i=Yt(r,1);for(r=Yt(r,2),n=Yt(n,2);!It(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Yt(r,1),n=Yt(n,1)}return t=Fn(e,s.R(t)),new Ae(s,t)}for(s=re;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=mt(n),o=i.R(t);at(o)||0<o.X(e);)n-=r,i=mt(n),o=i.R(t);It(i)&&(i=is),s=s.add(i),e=Fn(e,o)}return new Ae(s,e)}_.gb=function(e){return Bn(this,e).h};_.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new b(n,this.h&e.h)};_.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new b(n,this.h|e.h)};_.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new b(n,this.h^e.h)};function Bi(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new b(n,e.h)}function Yt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new b(s,e.h)}Ln.prototype.createWebChannel=Ln.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;nr.NO_ERROR=0;nr.TIMEOUT=8;nr.HTTP_ERROR=6;Zo.COMPLETE="complete";ta.EventType=rn;rn.OPEN="a";rn.CLOSE="b";rn.ERROR="c";rn.MESSAGE="d";$.prototype.listen=$.prototype.O;L.prototype.listenOnce=L.prototype.P;L.prototype.getLastError=L.prototype.Sa;L.prototype.getLastErrorCode=L.prototype.Ia;L.prototype.getStatus=L.prototype.da;L.prototype.getResponseJson=L.prototype.Wa;L.prototype.getResponseText=L.prototype.ja;L.prototype.send=L.prototype.ha;L.prototype.setWithCredentials=L.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=mt;b.fromString=Ma;var Fh=function(){return new Ln},Bh=function(){return er()},xr=nr,Uh=Zo,jh=Ht,Ui={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Tn=ta,qh=L,$h=ht,se=b;const ji="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee="10.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Co("@firebase/firestore");function Re(){return zt.logLevel}function g(e,...t){if(zt.logLevel<=V.DEBUG){const n=t.map($s);zt.debug(`Firestore (${Ee}): ${e}`,...n)}}function yt(e,...t){if(zt.logLevel<=V.ERROR){const n=t.map($s);zt.error(`Firestore (${Ee}): ${e}`,...n)}}function ce(e,...t){if(zt.logLevel<=V.WARN){const n=t.map($s);zt.warn(`Firestore (${Ee}): ${e}`,...n)}}function $s(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: `+e;throw yt(t),new Error(t)}function N(e,t){e||T()}function A(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends ge{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class Kh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(N(typeof r.accessToken=="string"),new La(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return N(t===null||typeof t=="string"),new J(t)}}class Hh{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Qh{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Hh(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(N(typeof n.token=="string"),this.R=n.token,new Wh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Yh(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function D(e,t){return e<t?-1:e>t?1:0}function ue(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new j(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new j(0,0))}static max(){return new w(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,n,r){n===void 0?n=0:n>t.length&&T(),r===void 0?r=t.length-n:r>t.length-n&&T(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return He.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof He?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends He{construct(t,n,r){return new x(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new x(n)}static emptyPath(){return new x([])}}const Jh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends He{construct(t,n,r){return new Q(t,n,r)}static isValidIdentifier(t){return Jh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Q(n)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(x.fromString(t))}static fromName(t){return new E(x.fromString(t).popFirst(5))}static empty(){return new E(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new x(t.slice()))}}function Zh(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=w.fromTimestamp(r===1e9?new j(n+1,0):new j(n,r));return new bt(s,E.empty(),t)}function td(e){return new bt(e.readTime,e.key,-1)}class bt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new bt(w.min(),E.empty(),-1)}static max(){return new bt(w.max(),E.empty(),-1)}}function ed(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==nd)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,r)=>{n(t)})}static reject(t){return new d((n,r)=>{r(t)})}static waitFor(t){return new d((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=d.resolve(!1);for(const r of t)n=n.next(s=>s?d.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new d((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new d((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new wt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ne(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Ks(r.target.error);this.V.reject(new Ne(t,s))}}static open(t,n,r,s){try{return new zs(n,t.transaction(s,r))}catch(i){throw new Ne(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(g("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new id(n)}}class Ut{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Ut.S(bn())===12.2&&yt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return g("SimpleDb","Removing database:",t),Lt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!So())return!1;if(Ut.C())return!0;const t=bn(),n=Ut.S(t),r=0<n&&n<10,s=Ut.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Ne(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ne(t,o))},s.onupgradeneeded=i=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=zs.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),d.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(g("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class sd{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Lt(this.k.delete())}}class Ne extends y{constructor(t,n){super(m.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ln(e){return e.name==="IndexedDbTransactionError"}class id{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(g("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Lt(r)}add(t){return g("SimpleDb","ADD",this.store.name,t,t),Lt(this.store.add(t))}get(t){return Lt(this.store.get(t)).next(n=>(n===void 0&&(n=null),g("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return g("SimpleDb","DELETE",this.store.name,t),Lt(this.store.delete(t))}count(){return g("SimpleDb","COUNT",this.store.name),Lt(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new d((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new d((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){g("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new d((r,s)=>{n.onerror=i=>{const o=Ks(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new d((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new sd(a),u=n(a.primaryKey,a.value,c);if(u instanceof d){const l=u.catch(h=>(c.done(),d.reject(h)));r.push(l)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>d.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Lt(e){return new d((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=Ks(r.target.error);n(s)}})}let qi=!1;function Ks(e){const t=Ut.S(bn());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qi||(qi=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Gs._e=-1;function hr(e){return e==null}function Un(e){return e===0&&1/e==-1/0}function od(e){return typeof e=="number"&&Number.isInteger(e)&&!Un(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ve(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ba(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,n){this.comparator=t,this.root=n||G.EMPTY}insert(t,n){return new M(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new M(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new In(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new In(this.root,t,this.comparator,!1)}getReverseIterator(){return new In(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new In(this.root,t,this.comparator,!0)}}class In{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??G.RED,this.left=s??G.EMPTY,this.right=i??G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new G(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return G.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,n,r,s,i){return this}insert(t,n,r){return new G(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.comparator=t,this.data=new M(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new zi(this.data.getIterator())}getIteratorFrom(t){return new zi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof X)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new X(this.comparator);return n.data=t,n}}class zi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.fields=t,t.sort(Q.comparator)}static empty(){return new ut([])}unionWith(t){let n=new X(Q.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ue(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ua("Invalid base64 string: "+i):i}}(t);return new nt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new nt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const ad=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(e){if(N(!!e),typeof e=="string"){let t=0;const n=ad.exec(e);if(N(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:B(e.seconds),nanos:B(e.nanos)}}function B(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Kt(e){return typeof e=="string"?nt.fromBase64String(e):nt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qs(e){const t=e.mapValue.fields.__previous_value__;return Hs(t)?Qs(t):t}function Qe(e){const t=Nt(e.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,n,r,s,i,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class We{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new We("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof We&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Hs(e)?4:ud(e)?9007199254740991:10:T()}function Et(e,t){if(e===t)return!0;const n=Gt(e);if(n!==Gt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Qe(e).isEqual(Qe(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nt(s.timestampValue),a=Nt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Kt(s.bytesValue).isEqual(Kt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return B(s.geoPointValue.latitude)===B(i.geoPointValue.latitude)&&B(s.geoPointValue.longitude)===B(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return B(s.integerValue)===B(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=B(s.doubleValue),a=B(i.doubleValue);return o===a?Un(o)===Un(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return ue(e.arrayValue.values||[],t.arrayValue.values||[],Et);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if($i(o)!==$i(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Et(o[c],a[c])))return!1;return!0}(e,t);default:return T()}}function Xe(e,t){return(e.values||[]).find(n=>Et(n,t))!==void 0}function le(e,t){if(e===t)return 0;const n=Gt(e),r=Gt(t);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=B(i.integerValue||i.doubleValue),c=B(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Ki(e.timestampValue,t.timestampValue);case 4:return Ki(Qe(e),Qe(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Kt(i),c=Kt(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=D(a[u],c[u]);if(l!==0)return l}return D(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=D(B(i.latitude),B(o.latitude));return a!==0?a:D(B(i.longitude),B(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=le(a[u],c[u]);if(l)return l}return D(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===wn.mapValue&&o===wn.mapValue)return 0;if(i===wn.mapValue)return 1;if(o===wn.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const f=D(c[h],l[h]);if(f!==0)return f;const p=le(a[c[h]],u[l[h]]);if(p!==0)return p}return D(c.length,l.length)}(e.mapValue,t.mapValue);default:throw T()}}function Ki(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=Nt(e),r=Nt(t),s=D(n.seconds,r.seconds);return s!==0?s:D(n.nanos,r.nanos)}function he(e){return os(e)}function os(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Nt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Kt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=os(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${os(n.fields[o])}`;return s+"}"}(e.mapValue):T()}function as(e){return!!e&&"integerValue"in e}function Ws(e){return!!e&&"arrayValue"in e}function Gi(e){return!!e&&"nullValue"in e}function Hi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Sn(e){return!!e&&"mapValue"in e}function ke(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ve(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ke(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ke(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ud(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.value=t}static empty(){return new ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Sn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ke(n)}setAll(t){let n=Q.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ke(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Sn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Et(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Sn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){ve(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ct(ke(this.value))}}function ja(e){const t=[];return ve(e.fields,(n,r)=>{const s=new Q([n]);if(Sn(r)){const i=ja(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Z(t,0,w.min(),w.min(),w.min(),ct.empty(),0)}static newFoundDocument(t,n,r,s){return new Z(t,1,n,w.min(),r,s,0)}static newNoDocument(t,n){return new Z(t,2,n,w.min(),w.min(),ct.empty(),0)}static newUnknownDocument(t,n){return new Z(t,3,n,w.min(),w.min(),ct.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,n){this.position=t,this.inclusive=n}}function Qi(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=le(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Et(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,n="asc"){this.field=t,this.dir=n}}function ld(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{}class U extends qa{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new dd(t,n,r):n==="array-contains"?new pd(t,r):n==="in"?new gd(t,r):n==="not-in"?new _d(t,r):n==="array-contains-any"?new yd(t,r):new U(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new fd(t,r):new md(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(le(n,this.value)):n!==null&&Gt(this.value)===Gt(n)&&this.matchesComparison(le(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vt extends qa{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new vt(t,n)}matches(t){return $a(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function $a(e){return e.op==="and"}function za(e){return hd(e)&&$a(e)}function hd(e){for(const t of e.filters)if(t instanceof vt)return!1;return!0}function cs(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+he(e.value);if(za(e))return e.filters.map(t=>cs(t)).join(",");{const t=e.filters.map(n=>cs(n)).join(",");return`${e.op}(${t})`}}function Ka(e,t){return e instanceof U?function(r,s){return s instanceof U&&r.op===s.op&&r.field.isEqual(s.field)&&Et(r.value,s.value)}(e,t):e instanceof vt?function(r,s){return s instanceof vt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ka(o,s.filters[a]),!0):!1}(e,t):void T()}function Ga(e){return e instanceof U?function(n){return`${n.field.canonicalString()} ${n.op} ${he(n.value)}`}(e):e instanceof vt?function(n){return n.op.toString()+" {"+n.getFilters().map(Ga).join(" ,")+"}"}(e):"Filter"}class dd extends U{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class fd extends U{constructor(t,n){super(t,"in",n),this.keys=Ha("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class md extends U{constructor(t,n){super(t,"not-in",n),this.keys=Ha("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ha(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class pd extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ws(n)&&Xe(n.arrayValue,this.value)}}class gd extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Xe(this.value.arrayValue,n)}}class _d extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(Xe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Xe(this.value.arrayValue,n)}}class yd extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ws(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xe(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Xi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Ed(e,t,n,r,s,i,o)}function Xs(e){const t=A(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>cs(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>he(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>he(r)).join(",")),t.ce=n}return t.ce}function Ys(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ld(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ka(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wi(e.startAt,t.startAt)&&Wi(e.endAt,t.endAt)}function us(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function vd(e,t,n,r,s,i,o,a){return new dr(e,t,n,r,s,i,o,a)}function fr(e){return new dr(e)}function Yi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Td(e){return e.collectionGroup!==null}function Oe(e){const t=A(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new X(Q.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new qn(i,r))}),n.has(Q.keyField().canonicalString())||t.le.push(new qn(Q.keyField(),r))}return t.le}function pt(e){const t=A(e);return t.he||(t.he=Id(t,Oe(e))),t.he}function Id(e,t){if(e.limitType==="F")return Xi(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new qn(s.field,i)});const n=e.endAt?new jn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new jn(e.startAt.position,e.startAt.inclusive):null;return Xi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ls(e,t,n){return new dr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function mr(e,t){return Ys(pt(e),pt(t))&&e.limitType===t.limitType}function Qa(e){return`${Xs(pt(e))}|lt:${e.limitType}`}function Jt(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ga(s)).join(", ")}]`),hr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>he(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>he(s)).join(",")),`Target(${r})`}(pt(e))}; limitType=${e.limitType})`}function pr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):E.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Oe(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Qi(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Oe(r),s)||r.endAt&&!function(o,a,c){const u=Qi(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Oe(r),s))}(e,t)}function wd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Wa(e){return(t,n)=>{let r=!1;for(const s of Oe(e)){const i=Ad(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ad(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?le(c,u):T()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ve(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Ba(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=new M(E.comparator);function St(){return Rd}const Xa=new M(E.comparator);function Ce(...e){let t=Xa;for(const n of e)t=t.insert(n.key,n);return t}function Ya(e){let t=Xa;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function jt(){return xe()}function Ja(){return xe()}function xe(){return new Te(e=>e.toString(),(e,t)=>e.isEqual(t))}const Sd=new M(E.comparator),Pd=new X(E.comparator);function P(...e){let t=Pd;for(const n of e)t=t.add(n);return t}const Cd=new X(D);function Vd(){return Cd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Un(t)?"-0":t}}function tc(e){return{integerValue:""+e}}function Dd(e,t){return od(t)?tc(t):Za(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this._=void 0}}function bd(e,t,n){return e instanceof $n?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hs(i)&&(i=Qs(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Ye?nc(e,t):e instanceof Je?rc(e,t):function(s,i){const o=ec(s,i),a=Ji(o)+Ji(s.Ie);return as(o)&&as(s.Ie)?tc(a):Za(s.serializer,a)}(e,t)}function Nd(e,t,n){return e instanceof Ye?nc(e,t):e instanceof Je?rc(e,t):n}function ec(e,t){return e instanceof zn?function(r){return as(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class $n extends gr{}class Ye extends gr{constructor(t){super(),this.elements=t}}function nc(e,t){const n=sc(t);for(const r of e.elements)n.some(s=>Et(s,r))||n.push(r);return{arrayValue:{values:n}}}class Je extends gr{constructor(t){super(),this.elements=t}}function rc(e,t){let n=sc(t);for(const r of e.elements)n=n.filter(s=>!Et(s,r));return{arrayValue:{values:n}}}class zn extends gr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Ji(e){return B(e.integerValue||e.doubleValue)}function sc(e){return Ws(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function kd(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ye&&s instanceof Ye||r instanceof Je&&s instanceof Je?ue(r.elements,s.elements,Et):r instanceof zn&&s instanceof zn?Et(r.Ie,s.Ie):r instanceof $n&&s instanceof $n}(e.transform,t.transform)}class Od{constructor(t,n){this.version=t,this.transformResults=n}}class gt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new gt}static exists(t){return new gt(void 0,t)}static updateTime(t){return new gt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class _r{}function ic(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ac(e.key,gt.none()):new hn(e.key,e.data,gt.none());{const n=e.data,r=ct.empty();let s=new X(Q.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qt(e.key,r,new ut(s.toArray()),gt.none())}}function xd(e,t,n){e instanceof hn?function(s,i,o){const a=s.value.clone(),c=to(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Qt?function(s,i,o){if(!Pn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=to(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(oc(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Me(e,t,n,r){return e instanceof hn?function(i,o,a,c){if(!Pn(i.precondition,o))return a;const u=i.value.clone(),l=eo(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Qt?function(i,o,a,c){if(!Pn(i.precondition,o))return a;const u=eo(i.fieldTransforms,c,o),l=o.data;return l.setAll(oc(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return Pn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Md(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=ec(r.transform,s||null);i!=null&&(n===null&&(n=ct.empty()),n.set(r.field,i))}return n||null}function Zi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ue(r,s,(i,o)=>kd(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class hn extends _r{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qt extends _r{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function oc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function to(e,t,n){const r=new Map;N(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Nd(o,a,n[s]))}return r}function eo(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,bd(i,o,t))}return r}class ac extends _r{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ld extends _r{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&xd(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Me(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Me(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Ja();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=ic(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(w.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),P())}isEqual(t){return this.batchId===t.batchId&&ue(this.mutations,t.mutations,(n,r)=>Zi(n,r))&&ue(this.baseMutations,t.baseMutations,(n,r)=>Zi(n,r))}}class Js{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){N(t.mutations.length===r.length);let s=function(){return Sd}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Js(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,C;function jd(e){switch(e){default:return T();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function cc(e){if(e===void 0)return yt("GRPC error has no .code"),m.UNKNOWN;switch(e){case F.OK:return m.OK;case F.CANCELLED:return m.CANCELLED;case F.UNKNOWN:return m.UNKNOWN;case F.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case F.INTERNAL:return m.INTERNAL;case F.UNAVAILABLE:return m.UNAVAILABLE;case F.UNAUTHENTICATED:return m.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case F.NOT_FOUND:return m.NOT_FOUND;case F.ALREADY_EXISTS:return m.ALREADY_EXISTS;case F.PERMISSION_DENIED:return m.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case F.ABORTED:return m.ABORTED;case F.OUT_OF_RANGE:return m.OUT_OF_RANGE;case F.UNIMPLEMENTED:return m.UNIMPLEMENTED;case F.DATA_LOSS:return m.DATA_LOSS;default:return T()}}(C=F||(F={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new se([4294967295,4294967295],0);function no(e){const t=qd().encode(e),n=new $h;return n.update(t),new Uint8Array(n.digest())}function ro(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new se([n,r],0),new se([s,i],0)]}class Zs{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ve(`Invalid padding: ${n}`);if(r<0)throw new Ve(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ve(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ve(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=se.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(se.fromNumber(r)));return s.compare($d)===1&&(s=new se([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=no(t),[r,s]=ro(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Zs(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=no(t),[r,s]=ro(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ve extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,dn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new yr(w.min(),s,new M(D),St(),P())}}class dn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new dn(r,n,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class uc{constructor(t,n){this.targetId=t,this.fe=n}}class lc{constructor(t,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class so{constructor(){this.ge=0,this.pe=oo(),this.ye=nt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=P(),n=P(),r=P();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:T()}}),new dn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=oo()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,N(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class zd{constructor(t){this.Le=t,this.ke=new Map,this.qe=St(),this.Qe=io(),this.Ke=new M(D)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(us(i))if(r===0){const o=new E(i.path);this.We(n,o,Z.newNoDocument(o,w.min()))}else N(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Kt(r).toUint8Array()}catch(c){if(c instanceof Ua)return ce("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Zs(o,s,i)}catch(c){return ce(c instanceof Ve?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&us(a.target)){const c=new E(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Z.newNoDocument(c,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=P();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new yr(t,n,this.Ke,this.qe,r);return this.qe=St(),this.Qe=io(),this.Ke=new M(D),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new so,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new X(D),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||g("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new so),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function io(){return new M(E.comparator)}function oo(){return new M(E.comparator)}const Kd={asc:"ASCENDING",desc:"DESCENDING"},Gd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hd={and:"AND",or:"OR"};class Qd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function hs(e,t){return e.useProto3Json||hr(t)?t:{value:t}}function Kn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Wd(e,t){return Kn(e,t.toTimestamp())}function _t(e){return N(!!e),w.fromTimestamp(function(n){const r=Nt(n);return new j(r.seconds,r.nanos)}(e))}function ti(e,t){return ds(e,t).canonicalString()}function ds(e,t){const n=function(s){return new x(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function dc(e){const t=x.fromString(e);return N(_c(t)),t}function fs(e,t){return ti(e.databaseId,t.path)}function Mr(e,t){const n=dc(t);if(n.get(1)!==e.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(mc(n))}function fc(e,t){return ti(e.databaseId,t)}function Xd(e){const t=dc(e);return t.length===4?x.emptyPath():mc(t)}function ms(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function mc(e){return N(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ao(e,t,n){return{name:fs(e,t),fields:n.value.mapValue.fields}}function Yd(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(N(l===void 0||typeof l=="string"),nt.fromBase64String(l||"")):(N(l===void 0||l instanceof Uint8Array),nt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?m.UNKNOWN:cc(u.code);return new y(l,u.message||"")}(o);n=new lc(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Mr(e,r.document.name),i=_t(r.document.updateTime),o=r.document.createTime?_t(r.document.createTime):w.min(),a=new ct({mapValue:{fields:r.document.fields}}),c=Z.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Cn(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Mr(e,r.document),i=r.readTime?_t(r.readTime):w.min(),o=Z.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Cn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Mr(e,r.document),i=r.removedTargetIds||[];n=new Cn([],i,s,null)}else{if(!("filter"in t))return T();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Ud(s,i),a=r.targetId;n=new uc(a,o)}}return n}function Jd(e,t){let n;if(t instanceof hn)n={update:ao(e,t.key,t.value)};else if(t instanceof ac)n={delete:fs(e,t.key)};else if(t instanceof Qt)n={update:ao(e,t.key,t.data),updateMask:cf(t.fieldMask)};else{if(!(t instanceof Ld))return T();n={verify:fs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof $n)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ye)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Je)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw T()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Wd(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(e,t.precondition)),n}function Zd(e,t){return e&&e.length>0?(N(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?_t(s.updateTime):_t(i);return o.isEqual(w.min())&&(o=_t(i)),new Od(o,s.transformResults||[])}(n,t))):[]}function tf(e,t){return{documents:[fc(e,t.path)]}}function ef(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fc(e,s);const i=function(u){if(u.length!==0)return gc(vt.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(l=>function(f){return{field:Zt(f.field),direction:sf(f.dir)}}(l))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hs(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ut:n,parent:s}}function nf(e){let t=Xd(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){N(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(h){const f=pc(h);return f instanceof vt&&za(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(S){return new qn(te(S.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,hr(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,p=h.values||[];return new jn(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,p=h.values||[];return new jn(p,f)}(n.endAt)),vd(t,s,o,i,a,"F",c,u)}function rf(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function pc(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=te(n.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=te(n.unaryFilter.field);return U.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=te(n.unaryFilter.field);return U.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=te(n.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(n){return U.create(te(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return vt.create(n.compositeFilter.filters.map(r=>pc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return T()}}(n.compositeFilter.op))}(e):T()}function sf(e){return Kd[e]}function of(e){return Gd[e]}function af(e){return Hd[e]}function Zt(e){return{fieldPath:e.canonicalString()}}function te(e){return Q.fromServerFormat(e.fieldPath)}function gc(e){return e instanceof U?function(n){if(n.op==="=="){if(Hi(n.value))return{unaryFilter:{field:Zt(n.field),op:"IS_NAN"}};if(Gi(n.value))return{unaryFilter:{field:Zt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hi(n.value))return{unaryFilter:{field:Zt(n.field),op:"IS_NOT_NAN"}};if(Gi(n.value))return{unaryFilter:{field:Zt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(n.field),op:of(n.op),value:n.value}}}(e):e instanceof vt?function(n){const r=n.getFilters().map(s=>gc(s));return r.length===1?r[0]:{compositeFilter:{op:af(n.op),filters:r}}}(e):T()}function cf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function _c(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n,r,s,i=w.min(),o=w.min(),a=nt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Pt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.ct=t}}function lf(e){const t=nf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ls(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this._n=new df}addToCollectionParentIndex(t,n){return this._n.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(bt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(bt.min())}updateCollectionGroup(t,n,r){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class df{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new X(x.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new X(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new de(0)}static Bn(){return new de(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.changes=new Te(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Z.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?d.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Me(r.mutation,s,ut.empty(),j.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,n,r=P()){const s=jt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Ce();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=jt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,P()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=St();const o=xe(),a=function(){return xe()}();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Qt)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Me(l.mutation,u,l.mutation.getFieldMask(),j.now())):o.set(u.key,ut.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new mf(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=xe();let s=new M((o,a)=>o-a),i=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||ut.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||P()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Ja();l.forEach(f=>{if(!i.has(f)){const p=ic(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Td(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):d.resolve(jt());let a=-1,c=i;return o.next(u=>d.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?d.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,P())).next(l=>({batchId:a,changes:Ya(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let s=Ce();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Ce();return this.indexManager.getCollectionParents(t,i).next(a=>d.forEach(a,c=>{const u=function(h,f){return new dr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r,s).next(l=>{l.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,Z.newInvalidDocument(l)))});let a=Ce();return o.forEach((c,u)=>{const l=i.get(c);l!==void 0&&Me(l.mutation,u,ut.empty(),j.now()),pr(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return d.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_t(s.createTime)}}(n)),d.resolve()}getNamedQuery(t,n){return d.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:lf(s.bundledQuery),readTime:_t(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.overlays=new M(E.comparator),this.hr=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const r=jt();return d.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),d.resolve()}getOverlaysForCollection(t,n,r){const s=jt(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return d.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new M((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=jt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=jt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return d.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Bd(n,r));let i=this.hr.get(n);i===void 0&&(i=P(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.Pr=new X(q.Ir),this.Tr=new X(q.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new q(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new q(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new E(new x([])),r=new q(n,t),s=new q(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new E(new x([])),r=new q(n,t),s=new q(n,t+1);let i=P();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new q(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class q{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return E.comparator(t.key,n.key)||D(t.pr,n.pr)}static Er(t,n){return D(t.pr,n.pr)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new X(q.Ir)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fd(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new q(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new q(n,0),s=new q(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new X(D);return n.forEach(s=>{const i=new q(s,0),o=new q(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),d.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;E.isDocumentKey(i)||(i=i.child(""));const o=new q(new E(i),0);let a=new X(D);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.pr)),!0)},o),d.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){N(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return d.forEach(n.mutations,s=>{const i=new q(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new q(n,0),s=this.wr.firstAfterOrEqual(r);return d.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t){this.vr=t,this.docs=function(){return new M(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return d.resolve(r?r.document.mutableCopy():Z.newInvalidDocument(n))}getEntries(t,n){let r=St();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Z.newInvalidDocument(s))}),d.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=St();const o=n.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ed(td(l),r)<=0||(s.has(l.key)||pr(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,r,s){T()}Fr(t,n){return d.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new vf(this)}getSize(t){return d.resolve(this.size)}}class vf extends ff{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),d.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t){this.persistence=t,this.Mr=new Te(n=>Xs(n),Ys),this.lastRemoteSnapshotVersion=w.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ei,this.targetCount=0,this.Br=de.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),d.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new de(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.qn(n),d.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),d.waitFor(i).next(()=>s)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return d.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),d.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),d.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return d.resolve(r)}containsKey(t,n){return d.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,n){this.Lr={},this.overlays={},this.kr=new Gs(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Tf(this),this.indexManager=new hf,this.remoteDocumentCache=function(s){return new Ef(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new uf(n),this.$r=new gf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new _f,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new yf(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){g("MemoryPersistence","Starting transaction:",t);const s=new wf(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return d.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class wf extends rd{constructor(t){super(),this.currentSequenceNumber=t}}class ni{constructor(t){this.persistence=t,this.zr=new ei,this.jr=null}static Hr(t){return new ni(t)}get Jr(){if(this.jr)return this.jr;throw T()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),d.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),d.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Jr,r=>{const s=E.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,w.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return d.or([()=>d.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=P(),s=P();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ri(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return wu()?8:Ut.v(bn())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Af;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(Re()<=V.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",Jt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),d.resolve()):(Re()<=V.DEBUG&&g("QueryEngine","Query:",Jt(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Re()<=V.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",Jt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pt(n))):d.resolve())}ji(t,n){if(Yi(n))return d.resolve(null);let r=pt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ls(n,null,"F"),r=pt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=P(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Zi(n,a);return this.Xi(n,u,o,c.readTime)?this.ji(t,ls(n,null,"F")):this.es(t,u,n,c)}))})))}Hi(t,n,r,s){return Yi(n)||s.isEqual(w.min())?d.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?d.resolve(null):(Re()<=V.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jt(n)),this.es(t,o,n,Zh(s,-1)).next(a=>a))})}Zi(t,n){let r=new X(Wa(t));return n.forEach((s,i)=>{pr(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return Re()<=V.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",Jt(n)),this.zi.getDocumentsMatchingQuery(t,n,bt.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new M(D),this.rs=new Te(i=>Xs(i),Ys),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new pf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Pf(e,t,n,r){return new Sf(e,t,n,r)}async function yc(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=P();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function Cf(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,f=h.keys();let p=d.resolve();return f.forEach(S=>{p=p.next(()=>l.getEntry(c,S)).next(R=>{const v=u.docVersions.get(S);N(v!==null),R.version.compareTo(v)<0&&(h.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),l.addEntry(R)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=P();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ec(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Vf(e,t){const n=A(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,l.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(nt.EMPTY_BYTE_STRING,w.min()).withLastLimboFreeSnapshotVersion(w.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(R,v,O){return R.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(f,p,l)&&a.push(n.Qr.updateTargetData(i,p))});let c=St(),u=P();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Df(i,o,t.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(w.min())){const l=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.ns=s,i))}function Df(e,t,n){let r=P(),s=P();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=St();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(w.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):g("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:s}})}function bf(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Nf(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,d.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Pt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function ps(e,t,n){const r=A(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ln(o))throw o;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function co(e,t,n){const r=A(e);let s=w.min(),i=P();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=A(c),f=h.rs.get(l);return f!==void 0?d.resolve(h.ns.get(f)):h.Qr.getTargetData(u,l)}(r,o,pt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:w.min(),n?i:P())).next(a=>(kf(r,wd(t),a),{documents:a,hs:i})))}function kf(e,t,n){let r=e.ss.get(t)||w.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class uo{constructor(){this.activeTargetIds=Vd()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Of{constructor(){this.no=new uo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new uo,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An=null;function Lr(){return An===null?An=function(){return 268435456+Math.round(2147483648*Math.random())}():An++,"0x"+An.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="WebChannelConnection";class Ff extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Lr(),c=this.bo(n,r.toUriEncodedString());g("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,i,o),this.Co(n,c,u,s).then(l=>(g("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw ce("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ee}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=Mf[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=Lr();return new Promise((o,a)=>{const c=new qh;c.setWithCredentials(!0),c.listenOnce(Uh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xr.NO_ERROR:const l=c.getResponseJson();g(Y,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case xr.TIMEOUT:g(Y,`RPC '${t}' ${i} timed out`),a(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case xr.HTTP_ERROR:const h=c.getStatus();if(g(Y,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const S=function(v){const O=v.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(O)>=0?O:m.UNKNOWN}(p.status);a(new y(S,p.message))}else a(new y(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(m.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{g(Y,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);g(Y,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Fo(t,n,r){const s=Lr(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Fh(),a=Bh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");g(Y,`Creating RPC '${t}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let f=!1,p=!1;const S=new Lf({lo:v=>{p?g(Y,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(f||(g(Y,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),g(Y,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},ho:()=>h.close()}),R=(v,O,K)=>{v.listen(O,it=>{try{K(it)}catch(Tt){setTimeout(()=>{throw Tt},0)}})};return R(h,Tn.EventType.OPEN,()=>{p||g(Y,`RPC '${t}' stream ${s} transport opened.`)}),R(h,Tn.EventType.CLOSE,()=>{p||(p=!0,g(Y,`RPC '${t}' stream ${s} transport closed`),S.Vo())}),R(h,Tn.EventType.ERROR,v=>{p||(p=!0,ce(Y,`RPC '${t}' stream ${s} transport errored:`,v),S.Vo(new y(m.UNAVAILABLE,"The operation could not be completed")))}),R(h,Tn.EventType.MESSAGE,v=>{var O;if(!p){const K=v.data[0];N(!!K);const it=K,Tt=it.error||((O=it[0])===null||O===void 0?void 0:O.error);if(Tt){g(Y,`RPC '${t}' stream ${s} received error:`,Tt);const pn=Tt.status;let Xt=function(uu){const _i=F[uu];if(_i!==void 0)return cc(_i)}(pn),gn=Tt.message;Xt===void 0&&(Xt=m.INTERNAL,gn="Unknown error status: "+pn+" with message "+Tt.message),p=!0,S.Vo(new y(Xt,gn)),h.close()}else g(Y,`RPC '${t}' stream ${s} received:`,K),S.mo(K)}}),R(a,jh.STAT_EVENT,v=>{v.stat===Ui.PROXY?g(Y,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===Ui.NOPROXY&&g(Y,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.Ro()},0),S}}function Fr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e){return new Qd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&g("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new vc(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(yt(n.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new y(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return g("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bf extends Tc{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=Yd(this.serializer,t),r=function(i){if(!("targetChange"in i))return w.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?w.min():o.readTime?_t(o.readTime):w.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=ms(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=us(c)?{documents:tf(i,c)}:{query:ef(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=hc(i,o.resumeToken);const u=hs(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(w.min())>0){a.readTime=Kn(i,o.snapshotVersion.toTimestamp());const u=hs(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=rf(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=ms(this.serializer),n.removeTarget=t,this.t_(n)}}class Uf extends Tc{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(N(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=Zd(t.writeResults,t.commitTime),r=_t(t.commitTime);return this.listener.T_(r,n)}return N(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=ms(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Jd(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,ds(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,ds(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(m.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class qf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(yt(n),this.g_=!1):g("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Wt(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=A(c);u.v_.add(4),await fn(u),u.x_.set("Unknown"),u.v_.delete(4),await vr(u)}(this))})}),this.x_=new qf(r,s)}}async function vr(e){if(Wt(e))for(const t of e.F_)await t(!0)}async function fn(e){for(const t of e.F_)await t(!1)}function Ic(e,t){const n=A(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),oi(n)?ii(n):Ie(n).Jo()&&si(n,t))}function wc(e,t){const n=A(e),r=Ie(n);n.C_.delete(t),r.Jo()&&Ac(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Wt(n)&&n.x_.set("Unknown"))}function si(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(w.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ie(e).c_(t)}function Ac(e,t){e.O_.Oe(t),Ie(e).l_(t)}function ii(e){e.O_=new zd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ie(e).start(),e.x_.p_()}function oi(e){return Wt(e)&&!Ie(e).Ho()&&e.C_.size>0}function Wt(e){return A(e).v_.size===0}function Rc(e){e.O_=void 0}async function zf(e){e.C_.forEach((t,n)=>{si(e,t)})}async function Kf(e,t){Rc(e),oi(e)?(e.x_.S_(t),ii(e)):e.x_.set("Unknown")}async function Gf(e,t,n){if(e.x_.set("Online"),t instanceof lc&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Gn(e,r)}else if(t instanceof Cn?e.O_.$e(t):t instanceof uc?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(w.min()))try{const r=await Ec(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.C_.get(u);l&&i.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.C_.get(c);if(!l)return;i.C_.set(c,l.withResumeToken(nt.EMPTY_BYTE_STRING,l.snapshotVersion)),Ac(i,c);const h=new Pt(l.target,c,u,l.sequenceNumber);si(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){g("RemoteStore","Failed to raise snapshot:",r),await Gn(e,r)}}async function Gn(e,t,n){if(!ln(t))throw t;e.v_.add(1),await fn(e),e.x_.set("Offline"),n||(n=()=>Ec(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await vr(e)})}function Sc(e,t){return t().catch(n=>Gn(e,n,t))}async function Tr(e){const t=A(e),n=kt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Hf(t);)try{const s=await bf(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,Qf(t,s)}catch(s){await Gn(t,s)}Pc(t)&&Cc(t)}function Hf(e){return Wt(e)&&e.D_.length<10}function Qf(e,t){e.D_.push(t);const n=kt(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Pc(e){return Wt(e)&&!kt(e).Ho()&&e.D_.length>0}function Cc(e){kt(e).start()}async function Wf(e){kt(e).d_()}async function Xf(e){const t=kt(e);for(const n of e.D_)t.I_(n.mutations)}async function Yf(e,t,n){const r=e.D_.shift(),s=Js.from(r,t,n);await Sc(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Tr(e)}async function Jf(e,t){t&&kt(e).P_&&await async function(r,s){if(function(o){return jd(o)&&o!==m.ABORTED}(s.code)){const i=r.D_.shift();kt(r).Zo(),await Sc(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Tr(r)}}(e,t),Pc(e)&&Cc(e)}async function ho(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const r=Wt(n);n.v_.add(3),await fn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await vr(n)}async function Zf(e,t){const n=A(e);t?(n.v_.delete(2),await vr(n)):t||(n.v_.add(2),await fn(n),n.x_.set("Unknown"))}function Ie(e){return e.N_||(e.N_=function(n,r,s){const i=A(n);return i.R_(),new Bf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:zf.bind(null,e),To:Kf.bind(null,e),u_:Gf.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),oi(e)?ii(e):e.x_.set("Unknown")):(await e.N_.stop(),Rc(e))})),e.N_}function kt(e){return e.B_||(e.B_=function(n,r,s){const i=A(n);return i.R_(),new Uf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:Wf.bind(null,e),To:Jf.bind(null,e),E_:Xf.bind(null,e),T_:Yf.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await Tr(e)):(await e.B_.stop(),e.D_.length>0&&(g("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new ai(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ci(e,t){if(yt("AsyncQueue",`${t}: ${e}`),ln(e))return new y(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=Ce(),this.sortedSet=new M(this.comparator)}static emptySet(t){return new ie(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ie)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ie;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.L_=new M(E.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):T():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class fe{constructor(t,n,r,s,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fe(t,n,ie.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.q_=void 0,this.Q_=[]}}class em{constructor(){this.queries=new Te(t=>Qa(t),mr),this.onlineState="Unknown",this.K_=new Set}}async function Vc(e,t){const n=A(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new tm),s)try{i.q_=await n.onListen(r)}catch(o){const a=ci(o,`Initialization of query '${Jt(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.Q_.push(t),t.U_(n.onlineState),i.q_&&t.W_(i.q_)&&ui(n)}async function Dc(e,t){const n=A(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function nm(e,t){const n=A(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&ui(n)}function rm(e,t,n){const r=A(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function ui(e){e.K_.forEach(t=>{t.next()})}class bc{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new fe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this.key=t}}class kc{constructor(t){this.key=t}}class sm{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=P(),this.mutatedKeys=P(),this.ua=Wa(t),this.ca=new ie(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new fo,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const f=s.get(l),p=pr(this.query,h)?h:null,S=!!f&&this.mutatedKeys.has(f.key),R=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?S!==R&&(r.track({type:3,doc:p}),v=!0):this.Ia(f,p)||(r.track({type:2,doc:p}),v=!0,(c&&this.ua(p,c)>0||u&&this.ua(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),v=!0):f&&!p&&(r.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(p?(o=o.add(p),i=R?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((l,h)=>function(p,S){const R=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return R(p)-R(S)}(l.type,h.type)||this.ua(l.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,u=c!==this._a;return this._a=c,o.length!==0||u?{snapshot:new fe(this.query,t.ca,i,o,t.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new fo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=P(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new kc(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new Nc(r))}),n}Ra(t){this.oa=t.hs,this.aa=P();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return fe.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class im{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class om{constructor(t){this.key=t,this.ma=!1}}class am{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Te(a=>Qa(a),mr),this.pa=new Map,this.ya=new Set,this.wa=new M(E.comparator),this.Sa=new Map,this.ba=new ei,this.Da={},this.Ca=new Map,this.va=de.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function cm(e,t){const n=ym(e);let r,s;const i=n.ga.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await Nf(n.localStore,pt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await um(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Ic(n.remoteStore,o)}return s}async function um(e,t,n,r,s){e.Ma=(h,f,p)=>async function(R,v,O,K){let it=v.view.ha(O);it.Xi&&(it=await co(R.localStore,v.query,!1).then(({documents:gn})=>v.view.ha(gn,it)));const Tt=K&&K.targetChanges.get(v.targetId),pn=K&&K.targetMismatches.get(v.targetId)!=null,Xt=v.view.applyChanges(it,R.isPrimaryClient,Tt,pn);return po(R,v.targetId,Xt.da),Xt.snapshot}(e,h,f,p);const i=await co(e.localStore,t,!0),o=new sm(t,i.hs),a=o.ha(i.documents),c=dn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(a,e.isPrimaryClient,c);po(e,n,u.da);const l=new im(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function lm(e,t){const n=A(e),r=n.ga.get(t),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!mr(i,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ps(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),wc(n.remoteStore,r.targetId),gs(n,r.targetId)}).catch(un)):(gs(n,r.targetId),await ps(n.localStore,r.targetId,!0))}async function hm(e,t,n){const r=Em(e);try{const s=await function(o,a){const c=A(o),u=j.now(),l=a.reduce((p,S)=>p.add(S.key),P());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let S=St(),R=P();return c.os.getEntries(p,l).next(v=>{S=v,S.forEach((O,K)=>{K.isValidDocument()||(R=R.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,S)).next(v=>{h=v;const O=[];for(const K of a){const it=Md(K,h.get(K.key).overlayedDocument);it!=null&&O.push(new Qt(K.key,it,ja(it.value.mapValue),gt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,u,O,a)}).next(v=>{f=v;const O=v.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(p,v.batchId,O)})}).then(()=>({batchId:f.batchId,changes:Ya(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new M(D)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,s.batchId,n),await mn(r,s.changes),await Tr(r.remoteStore)}catch(s){const i=ci(s,"Failed to persist write");n.reject(i)}}async function Oc(e,t){const n=A(e);try{const r=await Vf(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(N(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?N(o.ma):s.removedDocuments.size>0&&(N(o.ma),o.ma=!1))}),await mn(n,r,t)}catch(r){await un(r)}}function mo(e,t,n){const r=A(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=A(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const f of h.Q_)f.U_(a)&&(u=!0)}),u&&ui(c)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function dm(e,t,n){const r=A(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new M(E.comparator);o=o.insert(i,Z.newNoDocument(i,w.min()));const a=P().add(i),c=new yr(w.min(),new Map,new M(D),o,a);await Oc(r,c),r.wa=r.wa.remove(i),r.Sa.delete(t),li(r)}else await ps(r.localStore,t,!1).then(()=>gs(r,t,n)).catch(un)}async function fm(e,t){const n=A(e),r=t.batch.batchId;try{const s=await Cf(n.localStore,t);Mc(n,r,null),xc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mn(n,s)}catch(s){await un(s)}}async function mm(e,t,n){const r=A(e);try{const s=await function(o,a){const c=A(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(N(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);Mc(r,t,n),xc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await mn(r,s)}catch(s){await un(s)}}function xc(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function Mc(e,t,n){const r=A(e);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function gs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||Lc(e,r)})}function Lc(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(wc(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),li(e))}function po(e,t,n){for(const r of n)r instanceof Nc?(e.ba.addReference(r.key,t),pm(e,r)):r instanceof kc?(g("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||Lc(e,r.key)):T()}function pm(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(g("SyncEngine","New document in limbo: "+n),e.ya.add(r),li(e))}function li(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new E(x.fromString(t)),r=e.va.next();e.Sa.set(r,new om(n)),e.wa=e.wa.insert(n,r),Ic(e.remoteStore,new Pt(pt(fr(n.path)),r,"TargetPurposeLimboResolution",Gs._e))}}async function mn(e,t,n){const r=A(e),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=ri.Ki(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,u){const l=A(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>d.forEach(u,f=>d.forEach(f.qi,p=>l.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>d.forEach(f.Qi,p=>l.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!ln(h))throw h;g("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const p=l.ns.get(f),S=p.snapshotVersion,R=p.withLastLimboFreeSnapshotVersion(S);l.ns=l.ns.insert(f,R)}}}(r.localStore,i))}async function gm(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());const r=await yc(n.localStore,t);n.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new y(m.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await mn(n,r.us)}}function _m(e,t){const n=A(e),r=n.Sa.get(t);if(r&&r.ma)return P().add(r.key);{let s=P();const i=n.pa.get(t);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function ym(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Oc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_m.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dm.bind(null,t),t.fa.u_=nm.bind(null,t.eventManager),t.fa.xa=rm.bind(null,t.eventManager),t}function Em(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mm.bind(null,t),t}class go{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Er(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Pf(this.persistence,new Rf,t.initialUser,this.serializer)}createPersistence(t){return new If(ni.Hr,this.serializer)}createSharedClientState(t){return new Of}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gm.bind(null,this.syncEngine),await Zf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new em}()}createDatastore(t){const n=Er(t.databaseInfo.databaseId),r=function(i){return new Ff(i)}(t.databaseInfo);return function(i,o,a,c){return new jf(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new $f(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>mo(this.syncEngine,n,0),function(){return lo.D()?new lo:new xf}())}createSyncEngine(t,n){return function(s,i,o,a,c,u,l){const h=new am(s,i,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=A(r);g("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await fn(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):yt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=J.UNAUTHENTICATED,this.clientId=Fa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{g("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(g("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ci(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Br(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function _o(e,t){e.asyncQueue.verifyOperationInProgress();const n=await wm(e);g("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>ho(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>ho(t.remoteStore,s)),e._onlineComponents=t}function Im(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function wm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await Br(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Im(n))throw n;ce("Error using user provided cache. Falling back to memory cache: "+n),await Br(e,new go)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await Br(e,new go);return e._offlineComponents}async function Bc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await _o(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await _o(e,new vm))),e._onlineComponents}function Am(e){return Bc(e).then(t=>t.syncEngine)}async function _s(e){const t=await Bc(e),n=t.eventManager;return n.onListen=cm.bind(null,t.syncEngine),n.onUnlisten=lm.bind(null,t.syncEngine),n}function Rm(e,t,n={}){const r=new wt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new Fc({next:f=>{o.enqueueAndForget(()=>Dc(i,h));const p=f.docs.has(a);!p&&f.fromCache?u.reject(new y(m.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&c&&c.source==="server"?u.reject(new y(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new bc(fr(a.path),l,{includeMetadataChanges:!0,Z_:!0});return Vc(i,h)}(await _s(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e,t,n){if(!n)throw new y(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Sm(e,t,n,r){if(t===!0&&r===!0)throw new y(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Eo(e){if(!E.isDocumentKey(e))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function vo(e){if(E.isDocumentKey(e))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function hi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function At(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hi(e);throw new y(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Sm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ir{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new To({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new To(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zh;switch(r.type){case"firstParty":return new Qh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yo.get(n);r&&(g("ComponentProvider","Removing Datastore"),yo.delete(n),r.terminate())}(this),Promise.resolve()}}function Pm(e,t,n,r={}){var s;const i=(e=At(e,Ir))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=J.MOCK_USER;else{a=Tu(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new J(u)}e._authCredentials=new Kh(new La(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new wr(this.firestore,t,this._query)}}class st{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new st(this.firestore,t,this._key)}}class Dt extends wr{constructor(t,n,r){super(t,n,fr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new st(this.firestore,null,new E(t))}withConverter(t){return new Dt(this.firestore,t,this._path)}}function di(e,t,...n){if(e=oe(e),jc("collection","path",t),e instanceof Ir){const r=x.fromString(t,...n);return vo(r),new Dt(e,null,r)}{if(!(e instanceof st||e instanceof Dt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(x.fromString(t,...n));return vo(r),new Dt(e.firestore,null,r)}}function Ze(e,t,...n){if(e=oe(e),arguments.length===1&&(t=Fa.newId()),jc("doc","path",t),e instanceof Ir){const r=x.fromString(t,...n);return Eo(r),new st(e,null,new E(r))}{if(!(e instanceof st||e instanceof Dt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(x.fromString(t,...n));return Eo(r),new st(e.firestore,e instanceof Dt?e.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new vc(this,"async_queue_retry"),this._u=()=>{const n=Fr();n&&g("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Fr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=Fr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new wt;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!ln(t))throw t;g("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw yt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const s=ai.createAndSchedule(this,t,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&T()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}function Io(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class me extends Ir{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Cm}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qc(this),this._firestoreClient.terminate()}}function Vm(e,t){const n=typeof e=="object"?e:Sl(),r=typeof e=="string"?e:t||"(default)",s=Il(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Eu("firestore");i&&Pm(s,...i)}return s}function fi(e){return e._firestoreClient||qc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function qc(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,u,l){return new cd(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Uc(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Tm(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pe(nt.fromBase64String(t))}catch(n){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new pe(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=/^__.*__$/;class bm{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Qt(t,this.data,this.fieldMask,n,this.fieldTransforms):new hn(t,this.data,n,this.fieldTransforms)}}function zc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class gi{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new gi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.mu(t),s}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Hn(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(zc(this.du)&&Dm.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class Nm{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Er(t)}Su(t,n,r,s=!1){return new gi({du:t,methodName:n,wu:r,path:Q.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kc(e){const t=e._freezeSettings(),n=Er(e._databaseId);return new Nm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Gc(e,t,n,r,s,i={}){const o=e.Su(i.merge||i.mergeFields?2:0,t,n,s);Xc("Data must be an object, but it was:",o,r);const a=Qc(r,o);let c,u;if(i.merge)c=new ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=km(t,h,n);if(!o.contains(f))throw new y(m.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);xm(l,f)||l.push(f)}c=new ut(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new bm(new ct(a),c,u)}function Hc(e,t){if(Wc(e=oe(e)))return Xc("Unsupported field value:",t,e),Qc(e,t);if(e instanceof $c)return function(r,s){if(!zc(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Hc(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Dd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=j.fromDate(r);return{timestampValue:Kn(s.serializer,i)}}if(r instanceof j){const i=new j(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kn(s.serializer,i)}}if(r instanceof pi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pe)return{bytesValue:hc(s.serializer,r._byteString)};if(r instanceof st){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ti(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${hi(r)}`)}(e,t)}function Qc(e,t){const n={};return Ba(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ve(e,(r,s)=>{const i=Hc(s,t.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Wc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof j||e instanceof pi||e instanceof pe||e instanceof st||e instanceof $c)}function Xc(e,t,n){if(!Wc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=hi(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function km(e,t,n){if((t=oe(t))instanceof mi)return t._internalPath;if(typeof t=="string")return Yc(e,t);throw Hn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Om=new RegExp("[~\\*/\\[\\]]");function Yc(e,t,n){if(t.search(Om)>=0)throw Hn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new mi(...t.split("."))._internalPath}catch{throw Hn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Hn(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new y(m.INVALID_ARGUMENT,a+e+c)}function xm(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Mm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Zc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Mm extends Jc{data(){return super.data()}}function Zc(e,t){return typeof t=="string"?Yc(e,t):t instanceof mi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fm{convertValue(t,n="none"){switch(Gt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return B(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Kt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return ve(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new pi(B(t.latitude),B(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Qs(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qe(t));default:return null}}convertTimestamp(t){const n=Nt(t);return new j(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=x.fromString(t);N(_c(r));const s=new We(r.get(1),r.get(3)),i=new E(r.popFirst(5));return s.isEqual(n)||yt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class eu extends Jc{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Vn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Zc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vn extends eu{data(t={}){return super.data(t)}}class Bm{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new De(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Vn(this._firestore,this._userDataWriter,r.key,r,new De(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Vn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new De(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Vn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new De(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Um(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Um(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e){e=At(e,st);const t=At(e.firestore,me);return Rm(fi(t),e._key).then(n=>ou(t,e,n))}class ru extends Fm{constructor(t){super(),this.firestore=t}convertBytes(t){return new pe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new st(this.firestore,null,n)}}function ys(e,t,n){e=At(e,st);const r=At(e.firestore,me),s=tu(e.converter,t,n);return iu(r,[Gc(Kc(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,gt.none())])}function jm(e,t){const n=At(e.firestore,me),r=Ze(e),s=tu(e.converter,t);return iu(n,[Gc(Kc(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,gt.exists(!1))]).then(()=>r)}function su(e,...t){var n,r,s;e=oe(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Io(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Io(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(e instanceof st)u=At(e.firestore,me),l=fr(e._key.path),c={next:h=>{t[o]&&t[o](ou(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=At(e,wr);u=At(h.firestore,me),l=h._query;const f=new ru(u);c={next:p=>{t[o]&&t[o](new Bm(u,f,h,p))},error:t[o+1],complete:t[o+2]},Lm(e._query)}return function(f,p,S,R){const v=new Fc(R),O=new bc(p,v,S);return f.asyncQueue.enqueueAndForget(async()=>Vc(await _s(f),O)),()=>{v.La(),f.asyncQueue.enqueueAndForget(async()=>Dc(await _s(f),O))}}(fi(u),l,a,c)}function iu(e,t){return function(r,s){const i=new wt;return r.asyncQueue.enqueueAndForget(async()=>hm(await Am(r),s,i)),i.promise}(fi(e),t)}function ou(e,t,n){const r=n.docs.get(t._key),s=new ru(e);return new eu(e,s,t._key,r,new De(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Ee=s})(Rl),kn(new Le("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new me(new Gh(r.getProvider("auth-internal")),new Xh(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new We(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ne(ji,"4.4.3",t),ne(ji,"4.4.3","esm2017")})();const qm={apiKey:"AIzaSyBlHOCK0h_cD2_SjWFBqBV7ODqJAfqHLF8",authDomain:"webrtc-webxr.firebaseapp.com",projectId:"webrtc-webxr",storageBucket:"webrtc-webxr.appspot.com",messagingSenderId:"253134015381",appId:"1:253134015381:web:c7ff945e621d615bbe449c",measurementId:"G-5LGETHTH9V"},$m=bo(qm),Qn=Vm($m),zm={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10},lt=new RTCPeerConnection(zm);let Rn=null,Ur=null;const Km=document.getElementById("startBtn"),Gm=document.getElementById("joinBtn"),Hm=document.getElementById("vrBtn"),Qm=document.getElementById("localVideoStream"),au=document.getElementById("remoteVideoStream"),Wm=document.getElementById("localStream"),Xm=document.getElementById("remoteStream"),Ym=document.getElementById("vrScene"),jr=document.getElementById("vrVideo");async function Jm(){Wm.style.display="block",Rn=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}),Rn.getTracks().forEach(n=>lt.addTrack(n,Rn)),Qm.srcObject=Rn;const e=Ze(di(Qn,"calls"));cu(e,"offerCandidates");const t=await lt.createOffer();await lt.setLocalDescription(t),await ys(e,{offer:{type:t.type,sdp:t.sdp}}),await ys(Ze(Qn,"currentCall","activeCall"),{callId:e.id}),tp(e)}async function Zm(){Xm.style.display="block",Ur=new MediaStream,lt.ontrack=s=>s.streams[0].getTracks().forEach(i=>Ur.addTrack(i)),au.srcObject=Ur;const e=await np();if(!e)return;const t=Ze(Qn,"calls",e.callId);cu(t,"answerCandidates");const n=(await nu(t)).data();await lt.setRemoteDescription(new RTCSessionDescription(n.offer));const r=await lt.createAnswer();await lt.setLocalDescription(r),await ys(t,{answer:{type:r.type,sdp:r.sdp}},{merge:!0}),ep(t,"offerCandidates")}function cu(e,t){const n=di(e,t);lt.onicecandidate=r=>{r.candidate&&jm(n,r.candidate.toJSON())}}async function tp(e){su(e,async t=>{const n=t.data();n!=null&&n.answer&&!lt.currentRemoteDescription&&await lt.setRemoteDescription(new RTCSessionDescription(n.answer))})}function ep(e,t){const n=di(e,t);su(n,r=>{r.docChanges().forEach(s=>{s.type==="added"&&lt.addIceCandidate(new RTCIceCandidate(s.doc.data()))})})}async function np(){const e=await nu(Ze(Qn,"currentCall","activeCall"));return e.exists()?e.data():null}Km.onclick=Jm;Gm.onclick=Zm;Hm.onclick=()=>{const e=au.srcObject;jr.srcObject=e,jr.onloadedmetadata=()=>{jr.play(),Ym.style.display="block",document.querySelector("a-videosphere").setAttribute("src","#vrVideo")}};
