import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoNgZorroAntdModule} from "./ng-zorro-antd.module";
import { Task1DrumkitComponent } from './task1-drumkit/task1-drumkit.component';
import { Task2JSClockComponent } from './task2-js-clock/task2-js-clock.component';
import { Task3UpdateCssVariablesComponent } from './task3-update-css-variables/task3-update-css-variables.component';
// import {NzIconModule} from "ng-zorro-antd/icon";
// import {IconDefinition} from '@ant-design/icons-angular';
// import {User, Team, AlertOutline} from '@ant-design/icons-angular/icons';
//
//
// const icons: IconDefinition[] = [User, team, AlertOutline]

@NgModule({
  declarations: [
    AppComponent,
    Task1DrumkitComponent,
    Task2JSClockComponent,
    Task3UpdateCssVariablesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    // NzIconModule.forRoot(icons),


  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
