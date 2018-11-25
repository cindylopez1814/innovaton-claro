import { Component, OnInit } from '@angular/core';
import { Gyroscope, AbsoluteOrientationSensor, Accelerometer } from 'motion-sensors-polyfill';
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
    this.sensor = new Accelerometer();
    this.sensor.start();
    this.sensor.onreading = () => {
      this.x = this.sensor.x;
      this.y = this.sensor.y;
      this.z = this.sensor.z;
    console.log("Acceleration along X-axis: " + this.sensor.x);
    console.log("Acceleration along Y-axis: " + this.sensor.y);
    console.log("Acceleration along Z-axis: " + this.sensor.z);
    }
    this.sensor.onerror = event => console.log(event.error.name, event.error.message);
  }
  
}