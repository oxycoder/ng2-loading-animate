import { OnInit, AfterViewInit } from '@angular/core';
import { LoadingAnimateService } from './../src/ng2-loading-animate.service';
export declare class Demo implements OnInit, AfterViewInit {
    private _loadingSvc;
    constructor(_loadingSvc: LoadingAnimateService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    startAnimate(): void;
}
