import { EventEmitter } from '@angular/core';
export declare class LoadingAnimateService {
    gLoading: EventEmitter<any>;
    setValue(isLoading: boolean): void;
    getValue(): any;
}
