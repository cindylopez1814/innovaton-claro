import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectAvatarBoy() {
    const boy = document.getElementById('boy');
    const girl = document.getElementById('girl');
    boy.classList.remove('select');
    girl.classList.add('select');
  }

  selectAvatarGirl() {
    const boy = document.getElementById('boy');
    const girl = document.getElementById('girl');
    boy.classList.add('select');
    girl.classList.remove('select');
  }
}
