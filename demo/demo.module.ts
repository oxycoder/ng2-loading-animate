import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {LoadingAnimateModule} from './../ng2-loading-animate';
import {Demo} from './demo.component';
import { LoadingAnimateService } from './../src/ng2-loading-animate.service';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, CommonModule, LoadingAnimateModule],
  bootstrap: [Demo],
  providers: [LoadingAnimateService]
})
export class DemoModule {}