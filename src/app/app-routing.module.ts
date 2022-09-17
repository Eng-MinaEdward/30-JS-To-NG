import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {Task1DrumkitComponent} from "./task1-drumkit/task1-drumkit.component";
import {Task2JSClockComponent} from "./task2-js-clock/task2-js-clock.component";
import {Task3UpdateCssVariablesComponent} from "./task3-update-css-variables/task3-update-css-variables.component";

const routes: Routes = [
  {path: 'DrumKit', component: Task1DrumkitComponent},
  {path: 'JS-Clock', component: Task2JSClockComponent},
  {path: 'Update-CSS-Variables-with-JS', component: Task3UpdateCssVariablesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
