// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Function to write user data to Firebase database
function writeUserData(userId, date, destination, transportation, notes) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId); // Assuming 'users' is your database root node

    set(reference, {
        Date: date,
        Destination: destination,
        Transportation: transportation,
        Notes: notes
    }).then(() => {
        console.log("Data written successfully");
    }).catch((error) => {
        console.error("Error writing data: ", error);
    });
}
