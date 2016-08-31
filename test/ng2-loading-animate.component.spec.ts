import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {expect} from 'chai';
import {LoadingAnimateComponent} from './../src/ng2-loading-animate.component';
import {LoadingAnimateModule} from './../ng2-loading-animate';

describe('ng2-loading-animation component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [LoadingAnimateModule]});
  });

  it('should init', () => {
    const fixture: ComponentFixture<LoadingAnimateComponent> = TestBed.createComponent(LoadingAnimateComponent);
    fixture.detectChanges();
    //expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the Angular2 Loading Animate module!');
  });

});
