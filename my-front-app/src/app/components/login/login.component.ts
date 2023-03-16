import { Component } from '@angular/core';
import { LoginResponse } from '@app/models/login-response.model';
import { AuthService } from '@app/services/loginService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe({
        next: (loginResponse: LoginResponse) => {
          this.message = "connexion en cours"; 
          localStorage.setItem('token', loginResponse.token);
          this.router.navigate(['/']); 
        },
        error: (error: any) => {
          console.error(error);
          this.message = 'An error occurred while logging in.';
        }
      });
  }
}
