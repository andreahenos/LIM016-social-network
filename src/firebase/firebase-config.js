/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';

// import {
//   getStorage, ref as sRef, uploadBytesResumable, getDownloadURL,
// } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: 'AIzaSyD9ngpw2YVZK0ZTgYEn2L3kJX2HFlcDK8Q',
  authDomain: 'social-network-268a8.firebaseapp.com',
  databaseURL: 'https://social-network-268a8-default-rtdb.firebaseio.com',
  projectId: 'social-network-268a8',
  storageBucket: 'social-network-268a8.appspot.com',
  messagingSenderId: '564158720663',
  appId: '1:564158720663:web:0349103b12e24b0fe697d2',
  measurementId: 'G-VP2LPBCJD7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();