import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit(){

    // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAwa5Re87VJKJKJIv1eSPKG1zD6uhg27Jo",
    authDomain: "myproject-bc35b.firebaseapp.com",
    databaseURL: "https://myproject-bc35b.firebaseio.com",
    projectId: "myproject-bc35b",
    storageBucket: "myproject-bc35b.appspot.com",
    messagingSenderId: "588433437683"
  };
  firebase.initializeApp(config);
  } //oninit
}
