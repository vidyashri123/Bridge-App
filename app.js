// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firestore database
const db = firebase.firestore();

// Function to save data to Firestore
function saveData(collection, data) {
    return db.collection(collection).add(data);
}

// Form submission event listeners
document.getElementById('investorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const investorData = Object.fromEntries(formData.entries());

    saveData('investors', investorData)
        .then(() => alert('Investor data saved successfully'))
        .catch(error => console.error('Error saving investor data:', error));
});

document.getElementById('businessForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const businessData = Object.fromEntries(formData.entries());

    saveData('businesses', businessData)
        .then(() => alert('Business data saved successfully'))
        .catch(error => console.error('Error saving business data:', error));
});
