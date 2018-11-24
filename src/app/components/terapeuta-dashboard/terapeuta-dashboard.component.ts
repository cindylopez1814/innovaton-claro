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
    listaPac.classList.add('active');
  }
  addStar() {
    this.counter++;
  }
  
}
