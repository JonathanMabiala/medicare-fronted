import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated; boolean = false;
  userFullName: string;


  constructor(private oktaAuthService: OktaAuthStateService, @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }


  ngOnInit(): void {

    //Subscribe to 
    this.oktaAuthService.authState$.subscribe(
      (result) =>{
        this.isAuthenticated = result;
        this.getUserDetails();
      }
    )
  }

  getUserDetails() {
    if(this.isAuthenticated){

      //Fetch the logged in user details

      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name;
        }
      );
    }
  }

  logout() {
    // Terminate the session with okta
    this.oktaAuth.signOut();
  }

}
