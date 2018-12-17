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

  //email validation for the email that the user enters for signing up
  //email validation is used before the user is allowed to successfully signup
  var verified=/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/;
  var isemailvalid=verified.test(username)
  
  if(isemailvalid==false){
  alert("email not valid");
  }

  //password validation for password entered by user
  //if password is greater than 6 an alert window is shown to the user.


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

//this is the functionality for a registered user for logging in

            oldUser(username,password){
            
        this.authorize.auth.signInWithEmailAndPassword(username, password)
            .then((user) => {
            this.exist = user

         const verifieduser = firebase.auth().currentUser;
                     if (verifieduser.emailVerified) {
                    this.routing.navigate(['/authenticated-user']);  //if user is verified and authorized he/she
                                                                       //will be navigated to the shopping cart page 
                    
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
