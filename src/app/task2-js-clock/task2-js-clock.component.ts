import {Component, OnInit} from '@angular/core';
import {log} from "ng-zorro-antd/core/logger";

@Component({
  selector: 'app-task2-js-clock',
  templateUrl: './task2-js-clock.component.html',
  styleUrls: ['./task2-js-clock.component.scss']
})
export class Task2JSClockComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    setInterval(this.setTime, 1000)
  }

  degree = 0;

  setTime(e: string) {
    const now = new Date();
    const calc: any = {
      second: 60,
      mins: 60 * 60,
      hours: 60 * 60 * 12,
    }
    const seconds = now.getSeconds();

    const rotationDegree = ((seconds / calc[e]) * 360) + 90
    return `rotate(` + rotationDegree + `deg )`;
    // this.degree = rotationDegree;
    // console.log(rotationDegree)
    // console.log({mina: this.degree})
  }

}

