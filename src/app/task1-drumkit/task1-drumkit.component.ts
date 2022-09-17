import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-task1-drumkit',
  templateUrl: './task1-drumkit.component.html',
  styleUrls: ['./task1-drumkit.component.scss']
})
export class Task1DrumkitComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  panels = [
    {
      active: true,
      name: 'Code',
      disabled: false
    },
  ];

  isPlay: boolean = false;

  sounds = [
    {code: 65, url: 'assets/Task-1/sounds/clap.wav'},
    {code: 83, url: 'assets/Task-1/sounds/hihat.wav'},
    {code: 68, url: 'assets/Task-1/sounds/kick.wav'},
    {code: 70, url: 'assets/Task-1/sounds/openhat.wav'},
    {code: 71, url: 'assets/Task-1/sounds/boom.wav'},
    {code: 72, url: 'assets/Task-1/sounds/ride.wav'},
    {code: 74, url: 'assets/Task-1/sounds/snare.wav'},
    {code: 75, url: 'assets/Task-1/sounds/tom.wav'},
    {code: 76, url: 'assets/Task-1/sounds/tink.wav'},
  ];
  x: any = {
    65: 'assets/Task-1/sounds/clap.wav',
    83: 'assets/Task-1/sounds/hihat.wav',
    68: 'assets/Task-1/sounds/kick.wav',
    70: 'assets/Task-1/sounds/openhat.wav',
    71: 'assets/Task-1/sounds/boom.wav',
    72: 'assets/Task-1/sounds/ride.wav',
    74: 'assets/Task-1/sounds/snare.wav',
    75: 'assets/Task-1/sounds/tom.wav',
    76: 'assets/Task-1/sounds/tink.wav',
  }
  code = 0;

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) { // without type info
    this.code = event.keyCode;

    console.log(this.code);
    const src = this.x[this.code];
    console.log({src})

    let audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play().finally();
    this.isPlay = true
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) { // without type info
    this.isPlay = false
  }
}
