import { Component } from '@angular/core';
import { SliderData } from './growth-slider-v2/growth-slider-v2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  steps = {
    right: [0, 100, 200, 300, 400, 500],
    left: [100, 80, 60, 40, 20, 0]
  };

  sliderData: SliderData = {
    left: {
      title: 'Total FBA Array Capacity',
      initial: 100,
      max: 601
    },

    right: {
      title: 'Total CKD Array Capacity',
      initial: 100,
      max: 223
    },
    units: 'TBe'
  };
}
