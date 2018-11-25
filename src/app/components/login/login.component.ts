import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { LoginTeraService } from '../../service/login-tera.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  loginForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, public authService: AuthService, private router: Router, public loginService: LoginTeraService) {
    this.creatorAuthForm();
    this.createLogin();
  }

  ngOnInit() {
  }

  creatorAuthForm() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  createLogin() {
    this.loginForm = this.formBuilder.group({
      use: ['', Validators.compose([Validators.required])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onLogin() {
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
        this.router.navigate(['/Start']);
      })
      .catch(() => {
      });
  }

  ingresar() {
    this.loginService.entrar(this.loginForm.value.use, this.loginForm.value.pass)
    .then(() => {
      this.router.navigate(['terapeuta']);
    });
  }

}
