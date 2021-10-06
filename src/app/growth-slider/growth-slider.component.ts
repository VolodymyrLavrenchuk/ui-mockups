import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { pairwise } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export interface Steps {
  left: number[];
  right: number[];
}

@Component({
  selector: 'app-growth-slider',
  templateUrl: './growth-slider.component.html',
  styleUrls: ['./growth-slider.component.scss']
})
export class GrowthSliderComponent implements OnInit, AfterViewInit {

  currentStep = new BehaviorSubject<number>(0);

  @Input() data: Steps;
  @ViewChild('leftStepsContainer') lStepsEl;
  @ViewChild('rightStepsContainer') rStepsEl;

  constructor() { }

  increase(el, prev, curr, minuted = null) {
    el.nativeElement.children[minuted ? minuted - prev : prev].classList.add('filled');
    el.nativeElement.children[minuted ? minuted - prev : prev].classList.remove('current');
    el.nativeElement.children[minuted ? minuted - curr : curr].classList.add('current');
  }

  decrease(el, prev, curr, minuted = null) {
    el.nativeElement.children[minuted ? minuted - prev : prev].classList.remove('current');
    el.nativeElement.children[minuted ? minuted - curr : curr].classList.remove('filled');
    el.nativeElement.children[minuted ? minuted - curr : curr].classList.add('current');
  }

  ngOnInit(): void {
    this.currentStep.asObservable().pipe(pairwise()).subscribe(([previous, current]) => {
      if (previous !== null) {
        if (previous > current) {
          this.decrease(this.rStepsEl, previous, current);
          this.decrease(this.lStepsEl, previous, current, this.lStepsEl.nativeElement.children.length - 1);
        } else {
          this.increase(this.rStepsEl, previous, current);
          this.increase(this.lStepsEl, previous, current, this.lStepsEl.nativeElement.children.length - 1);
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.rStepsEl.nativeElement.children[0].classList.add('current');
    this.lStepsEl.nativeElement.children[this.lStepsEl.nativeElement.children.length - 1]
      .classList.add('current');
    // this.stepsEl.nativeElement.children[0].classList.add('filled');
  }

  prev() {
    if (this.currentStep.value > 0) {
      this.currentStep.next(this.currentStep.value - 1);
    }
  }

  next() {
    if (this.currentStep.value < this.data.right.length - 1) {
      this.currentStep.next(this.currentStep.value + 1);
    }
  }
}
