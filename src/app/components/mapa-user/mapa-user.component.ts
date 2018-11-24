import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-mapa-user',
  templateUrl: './mapa-user.component.html',
  styleUrls: ['./mapa-user.component.css']
})
export class MapaUserComponent implements OnInit {
  
  youtubeUrl = "https://www.youtube.com/watch?v=YZJGyLOj2iM";
  youtubeId = "YZJGyLOj2iM";
  constructor(private embedService: EmbedVideoService) {
    // console.log(this.embedService.embed(this.youtubeUrl));
    // console.log(this.embedService.embed_youtube(this.youtubeId));
  }
  
  ngOnInit() {
  }
  verVideo() {
    // console.log('works');
    const btns = document.getElementById('buttonContainer');
    btns.classList.remove('show');
    btns.classList.add('hidden');
    
    const videoEmbed= document.getElementById('videoElement');
      
    videoEmbed.classList.remove('hidden');
    videoEmbed.classList.add('show');
    }

      pasarQuestionario(){
        const videoEmbed= document.getElementById('videoElement');
        videoEmbed.classList.remove('show');
        videoEmbed.classList.add('hidden'); 
        const formComponent = document.getElementById('formValidatorContainer');
        formComponent.classList.remove('hidden');
        formComponent.classList.add('show');
      }

}
