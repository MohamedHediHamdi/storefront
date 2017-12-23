import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { AppConst } from '../../constants/app-const';
import { error } from 'util';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private loginError = false;
  private loggedIn = false;
  private credential = { 'username': '', 'password': '' };

  private emailSent = false;
  private usernameExists: boolean;
  private emailExists: boolean;
  private username: string;
  private email: string;

  private emailNotExists = false;
  private forgetPasswordEmailSent: boolean;
  private recoverEmail: string;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  onLogin() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('xAuthToken', res.json().token);
        this.loggedIn = true;
        location.reload();
        this.router.navigate(['/home']);
  },
  err => {
    this.loggedIn = false;
    this.loginError = true;
    console.log(err);
}
    );
  }

ngOnInit() {
}

}
