import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terapeuta-dashboard',
  templateUrl: './terapeuta-dashboard.component.html',
  styleUrls: ['./terapeuta-dashboard.component.css']
})
export class TerapeutaDashboardComponent implements OnInit {

  counter: number = 0;
  constructor() { }

  ngOnInit() {
  }
  verPaciente(id:string) {
    const listaPac = document.getElementById(id);
    const ListadoPac= document.getElementById("nav-tabContent");
    const perfilPac = document.getElementById("nav-contact");
    const desafiosPac= document.getElementById("nav-profile");
    listaPac.classList.add('active');
    ListadoPac.classList.remove('show');
    ListadoPac.classList.add('hidden');
    perfilPac.classList.add('show');
    perfilPac.classList.remove('hidden');
  }
  addStar() {
    this.counter++;
  }
  
}
