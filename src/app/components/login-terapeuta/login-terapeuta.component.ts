import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { LoginTeraService } from '../../service/login-tera.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-terapeuta',
  templateUrl: './login-terapeuta.component.html',
  styleUrls: ['./login-terapeuta.component.scss']
})
export class LoginTerapeutaComponent implements OnInit {
  loginForm: FormGroup;
  user: any;

  constructor(public loginService: LoginTeraService, private formBuilder: FormBuilder, private router: Router) {
    this.createLogin();
  }

  ngOnInit() {
  }

  createLogin() {
    this.loginForm = this.formBuilder.group({
      use: ['', Validators.compose([Validators.required])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ingresar() {
    this.loginService.entrar(this.loginForm.value.use, this.loginForm.value.pass)
    .then(() => {
      this.router.navigate(['terapeuta']);
    });
  }

}
