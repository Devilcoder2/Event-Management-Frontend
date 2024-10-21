// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBe6q44-wVAqnQITklN794qmuF24OwIn1A",
    authDomain: "app2-69833.firebaseapp.com",
    projectId: "app2-69833",
    storageBucket: "app2-69833.appspot.com",
    messagingSenderId: "251352689998",
    appId: "1:251352689998:web:b27db5709ec3cff47e821f",
    measurementId: "G-7VRPJXBM6X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app); // Firestore instance



//sending notification
async function sendNotification(title, message, userId) {
  try {
      await db.collection('notifications').add({
          title: title,
          message: message,
          userId: userId, 
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          read: false 
      });
      console.log('Notification sent successfully');
  } catch (error) {
      console.error('Error sending notification:', error);
  }
}


// sendNotification('New Message', 'You have a new message from John', 'user_12345'); it will used in resister event

async function getNotifications(userId) {
  db.collection('notifications')
      .where('userId', '==', userId)
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
          const notifications = [];
          snapshot.forEach((doc) => {
              notifications.push({ id: doc.id, ...doc.data() });
          });
          console.log('Notifications:', notifications);
          // Here, you can update the UI to show the notifications
      });
}

// Example usage
// getNotifications('user_12345');used where get notifications



export { analytics, auth, db,sendNotification ,getNotifications};