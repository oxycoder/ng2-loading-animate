import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {LoadingAnimateModule, LoadingAnimateService} from './../ng2-loading-animate';
import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, CommonModule, LoadingAnimateModule.forRoot()],
  bootstrap: [Demo],
  providers: [LoadingAnimateService]
})
export class DemoModule {}