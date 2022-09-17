import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JavaScript-30Tasks-Master';
  isCollapsed = false;

  change(value: boolean): void {
    // console.log(value);
  }
}
