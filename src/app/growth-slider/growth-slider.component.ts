import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { pairwise } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-growth-slider',
  templateUrl: './growth-slider.component.html',
  styleUrls: ['./growth-slider.component.scss']
})
export class GrowthSliderComponent implements OnInit, AfterViewInit {

  currentStep = new BehaviorSubject<number>(0);

  @Input() data: number[];
  @ViewChild('stepsContainer') stepsEl;

  constructor() { }

  ngOnInit(): void {
    this.currentStep.asObservable().pipe(pairwise()).subscribe(([previous, current]) => {
      if (previous !== null) {
        if (previous > current) {
          this.stepsEl?.nativeElement.children[previous].classList.remove('current');
          this.stepsEl?.nativeElement.children[previous].classList.remove('filled');
          this.stepsEl.nativeElement.children[current].classList.add('current');
        } else {
          this.stepsEl.nativeElement.children[previous].classList.remove('current');
          this.stepsEl.nativeElement.children[current].classList.add('current');
          this.stepsEl.nativeElement.children[current].classList.add('filled');
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.stepsEl.nativeElement.children[0].classList.add('current');
    this.stepsEl.nativeElement.children[0].classList.add('filled');
  }

  prev() {
    if (this.currentStep.value > 0) {
      this.currentStep.next(this.currentStep.value - 1);
    }
  }

  next() {
    if (this.currentStep.value < this.data.length - 1) {
      this.currentStep.next(this.currentStep.value + 1);
    }
  }
}
