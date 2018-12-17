import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username: String;
password: String;
 exist: any = null;


  constructor(private authorize: AngularFireAuth, private routing: Router) {
  this.authorize.authState.subscribe((auth) => {
            this.exist = auth
  });
  }
  ngOnInit() {
  }

  newUser(username,password){
  
  var verified=/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/;
  var isemailvalid=verified.test(username)
  
  if(isemailvalid==false){
  alert("email not valid");
  }

  if(password.length<6){
    alert("password not valid");

  }

          firebase.auth().createUserWithEmailAndPassword(username, password)
                    .then(res => {
                firebase.auth().signInWithEmailAndPassword(username, password)
                    .then((user) => {
                        const email = firebase.auth().currentUser;
                        email.sendEmailVerification();
                        console.log('Verification mail sent to ' + email.uid + '!!');
                    })
                    .catch(err => {
                        console.log('Error sending the Verification Email !!')
                    });
            });
}
            oldUser(username,password){
            
        this.authorize.auth.signInWithEmailAndPassword(username, password)
            .then((user) => {
            this.exist = user

         const verifieduser = firebase.auth().currentUser;
                     if (verifieduser.emailVerified) {
                    this.routing.navigate(['/authenticated-user']);
                    localStorage.setItem('email',firebase.auth().currentUser);
                    console.log('Login successful !!');
                }
                else {
                    console.log('Error occured !!')
                }
            })

            
            .catch(err => {
                console.log('Click on Signup first !!');
            });
    }
    }


}
