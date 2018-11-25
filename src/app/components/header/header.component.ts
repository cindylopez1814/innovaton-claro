import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  hola(){
    console.log("hola");
  }
  logout() {
    console.log("salir");
    this.authService.logOut()
      .then(() => {
        this.router.navigate(['/Login']);
      })
      .catch(() => {
      });
  }
}
