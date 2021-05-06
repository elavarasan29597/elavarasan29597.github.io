import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, FacebookLoginProvider, SocialUser, GoogleLoginProvider } from 'angularx-social-login';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  loginForm !: FormGroup;
  socialUser !: SocialUser;
  isLoggedin !: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {
    console.log(this.isLoggedin)
  }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
    });
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }



  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }


  signOut(): void {
    this.socialAuthService.signOut();
  }

}