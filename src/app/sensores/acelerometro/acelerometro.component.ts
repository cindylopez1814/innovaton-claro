import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-acelerometro',
templateUrl: './acelerometro.component.html',
styleUrls: ['./acelerometro.component.scss']
})
export class AcelerometroComponent implements OnInit {
x:any;
y:any;
z:any;
sensor:any; 
constructor() {

  
}
  ngOnInit() {
    
  }
  
}