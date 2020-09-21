import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBK_lgO9twDMnSS9hFLPfjtW_xjhrMQ_tQ",
  authDomain: "chatty-19916.firebaseapp.com",
  databaseURL: "https://chatty-19916.firebaseio.com",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database