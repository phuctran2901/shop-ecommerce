import firebase from 'firebase/app';
import 'firebase/auth';
var config = {
    apiKey : "AIzaSyA9yapCsVYYLGUNm0yS3j4qQbDzWQQn2gg",
    authDomain : "e-shop-login-eee50.firebaseapp.com",
    databaseURL : "https://e-shop-login-eee50.firebaseio.com",
    projectID : "e-shop-login-eee50",
    storageBucket : "e-shop-login-eee50.appspot.com",
    messaingSenderID : "597345501585"
}

const fire = firebase.initializeApp(config);
export default fire;