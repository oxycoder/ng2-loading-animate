import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { LoadingAnimateService } from './ng2-loading-animate.service';

@Component({
    selector: 'loading-animate',
    template: `
        <div class="loader" [@loadingState]="loadingState">
            <div class="loading">
                <div class="loading-inner">
                    <div class="sk-cube-grid">
                        <div class="sk-cube sk-cube1"></div>
                        <div class="sk-cube sk-cube2"></div>
                        <div class="sk-cube sk-cube3"></div>
                        <div class="sk-cube sk-cube4"></div>
                        <div class="sk-cube sk-cube5"></div>
                        <div class="sk-cube sk-cube6"></div>
                        <div class="sk-cube sk-cube7"></div>
                        <div class="sk-cube sk-cube8"></div>
                        <div class="sk-cube sk-cube9"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .loader {
            display: block;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #000;
            color: #fff;
            text-align: center;
            z-index: 10;
        }
        .loader .loading {
            position: relative;
            height: 100%;
        }
        .loader .loading-inner {
            position: relative;
            top: 50%;
            margin-top: -40px;
        }
        .loader .loading small {
            font-size: 10px;
            font-weight: bold;
        }
        .sk-cube-grid {
            width: 50px;
            height: 50px;
            margin: 0 auto 10px;
        }
        .sk-cube-grid .sk-cube {
            width: 33%;
            height: 33%;
            background-color: #fff;
            float: left;
            -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        }
        .sk-cube-grid .sk-cube1 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
        }
        .sk-cube-grid .sk-cube2 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
        }
        .sk-cube-grid .sk-cube3 {
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
        }
        .sk-cube-grid .sk-cube4 {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
        }
        .sk-cube-grid .sk-cube5 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
        }
        .sk-cube-grid .sk-cube6 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
        }
        .sk-cube-grid .sk-cube7 {
            -webkit-animation-delay: 0s;
            animation-delay: 0s;
        }
        .sk-cube-grid .sk-cube8 {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
        }
        .sk-cube-grid .sk-cube9 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
        }
        @-webkit-keyframes sk-cubeGridScaleDelay {
            0%, 70%, 100% {
                -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
            }
            35% {
                -webkit-transform: scale3D(0, 0, 1);
                transform: scale3D(0, 0, 1);
            }
        }
        @keyframes sk-cubeGridScaleDelay {
            0%, 70%, 100% {
                -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
            }
            35% {
                -webkit-transform: scale3D(0, 0, 1);
                transform: scale3D(0, 0, 1);
            }
        }
    `],
    animations: [
        trigger('loadingState', [
            state( 'inactive', style({
                opacity: 0,
                display: 'none'
            })),
            state('active',   style({
                opacity: 1,
            })),
            transition('active => inactive', animate('200ms ease-out')),
            transition('inactive => active', animate('0ms ease-in'))
        ])
    ]
})
export class LoadingAnimateComponent implements OnInit {

    loadingState: string = 'inactive';

    constructor(private _loadingSvc: LoadingAnimateService) {}

    ngOnInit(): void {
        this._loadingSvc.getValue().subscribe( (status: boolean) => {
            this.loadingState = status ? 'active' : 'inactive';
        });
    }
}
