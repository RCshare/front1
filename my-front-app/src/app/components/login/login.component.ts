import { Component } from '@angular/core';
import { LoginResponse } from '@app/models/login-response.model';
import { LoginService } from '@services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  constructor(private userService: LoginService) { }

  login(): void {
    this.userService.login(this.username, this.password)
      .subscribe({
        next: (loginResponse: LoginResponse) => {
          this.message = loginResponse.message;
        },
        error: (error) => {
          console.error(error);
          this.message = 'An error occurred while logging in.';
        }
      });
  }
}
