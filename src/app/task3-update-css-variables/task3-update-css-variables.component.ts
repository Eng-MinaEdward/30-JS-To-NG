import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-task3-update-css-variables',
  templateUrl: './task3-update-css-variables.component.html',
  styleUrls: ['./task3-update-css-variables.component.scss']
})
export class Task3UpdateCssVariablesComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  style: any;

  padding: any
  filter: any
  background: any

  onModelChange(value: number, type: string) {

    // const calc: any = {
    //   space: '' + value + 'px',
    //   blur: `blur(` + value + `px)`,
    //   color: value
    // }
    // this.style = calc[type];

    switch (type) {
      case 'space' : {
        this.padding = '' + value + 'px'
        break
      }

      case 'blur' : {
        this.filter = `blur(` + value + `px)`
        break
      }

      case 'color' : {
        this.background = value
        break
      }

    }
  }
}


