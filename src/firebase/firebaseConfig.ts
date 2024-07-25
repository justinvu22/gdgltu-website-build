// src/firebase/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBOchvjXsiIZ8kqJHnPYzbVQtR9QbaHFSw',
  authDomain: 'gdsc-ltu.firebaseapp.com',
  databaseURL: 'https://gdsc-ltu-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'gdsc-ltu',
  storageBucket: 'gdsc-ltu.appspot.com',
  messagingSenderId: '300269462803',
  appId: '1:300269462803:web:2ee63cff813e8c6ead66e6',
  measurementId: 'G-0CJFFHMGWS'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database, analytics };
