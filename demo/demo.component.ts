import {Component, OnInit, AfterViewInit} from '@angular/core';
import {LoadingAnimateService} from './../src/ng2-loading-animate.service';
@Component({
  selector: 'demo-app',
  template: `
  <h2>Loading animation</h2>
  <loading-animate></loading-animate>
  <button (click)="startAnimate()">Start Animate</button>
  `
})
export class Demo implements OnInit, AfterViewInit {
  constructor(private _loadingSvc: LoadingAnimateService) {}

  ngOnInit(): void {
    this._loadingSvc.setValue(true);
  }

  ngAfterViewInit(): void {
    this._loadingSvc.setValue(false);
  }

  startAnimate(): void {
    this._loadingSvc.setValue(true);
    let that: any = this;
    setTimeout(function(): void {
      that._loadingSvc.setValue(false);
    }, 3000);
  }
}
