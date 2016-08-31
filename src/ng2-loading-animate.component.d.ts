import { OnInit } from '@angular/core';
import { LoadingAnimateService } from './ng2-loading-animate.service';
export declare class LoadingAnimateComponent implements OnInit {
    private _loadingSvc;
    isLoading: boolean;
    constructor(_loadingSvc: LoadingAnimateService);
    ngOnInit(): void;
}
