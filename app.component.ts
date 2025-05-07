import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  host: {ngSkipHydration: 'true'},
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'birthday';
  constructor(private router: Router) { }
  opt1(){
    alert('YAY! i knew you would say yes my love');
    console.log('YAY! i knew you would say yes my love');
    let aud=new Audio();
    aud.src="../songs.mp3";
    aud.load();
    aud.currentTime = 53;
    aud.play();
  }
  opt2(){
    alert('HAHA! there is no option for no so you are going out with me my love');
    console.log('HAHA! there is no option for no so you are going out with me my love');
    let aud=new Audio();
    aud.src="../songs.mp3";
    aud.load();
    aud.currentTime = 53;
    aud.play();
  }
}
