// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDo54N5dW37BK8FFYXvBjMbvU6lCiwLFrY",
    authDomain: "react-native-jounal-ril-caen.firebaseapp.com",
    databaseURL: "https://react-native-jounal-ril-caen.firebaseio.com",
    projectId: "react-native-jounal-ril-caen",
    storageBucket: "react-native-jounal-ril-caen.appspot.com",
    messagingSenderId: "570970188810",
    appId: "1:570970188810:web:dc7e4a030d7b4b714b03f3"
};

// We should import firebase from this module instead of the default package.
import * as firebase from 'firebase'  // Should not be used elsewhere in the project
import '@firebase/firestore';

firebase.initializeApp(firebaseConfig)
export default firebase;