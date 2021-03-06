import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingAnimateComponent } from './ng2-loading-animate.component';
import { LoadingAnimateService } from './ng2-loading-animate.service';

export * from './ng2-loading-animate.service';

@NgModule({
  declarations: [
    LoadingAnimateComponent
  ],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [LoadingAnimateComponent],
  providers: [LoadingAnimateService]
})
export class LoadingAnimateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadingAnimateModule,
      providers: [LoadingAnimateService]
    };
  }
}
