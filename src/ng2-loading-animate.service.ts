import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LoadingAnimateService {

    @Output() gLoading: EventEmitter<any> = new EventEmitter();

    setValue(isLoading: boolean): void {
        console.log(isLoading);
        this.gLoading.emit(isLoading);
    }

    getValue(): any {
        return this.gLoading;
    }
}
