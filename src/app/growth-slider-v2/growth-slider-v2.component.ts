import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

interface SliderDataItem {
  title: string;
  initial: number;
  max: number;
}

export interface SliderData {
  left: SliderDataItem;
  right: SliderDataItem;
  units: string;
}

interface ItemValues {
  percent: number;
  current: number;
  remaining: number;
  total: number;
}


@Component({
  selector: 'app-growth-slider-v2',
  templateUrl: './growth-slider-v2.component.html',
  styleUrls: ['./growth-slider-v2.component.scss']
})
export class GrowthSliderV2Component implements OnInit, AfterViewInit {

  left: ItemValues = {
    percent: 100,
    current: 0,
    remaining: 0,
    total: 0
  };

  right: ItemValues = {
    percent: 0,
    current: 0,
    remaining: 0,
    total: 0
  };

  @Input() data: SliderData;

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.left.remaining = this.data.left.max;
    this.right.remaining = this.data.right.max;

    this.left.total = this.data.left.initial;
    this.right.total = this.data.right.initial;
  }

  leftChange(value) {
    this.right.percent = 100 - value;
    this.left.current = Math.round((100 - value) * this.data.left.max / 100);
    this.left.remaining = this.data.left.max - this.left.current;
    this.right.remaining = Math.round(this.data.right.max - ((100 - value) * this.data.right.max / 100));
    this.left.total = this.data.left.initial + this.left.current;
  }

  rightChange(value) {
    this.left.percent = 100 - value;
    this.right.current = Math.round(value * this.data.right.max / 100);
    this.right.remaining = this.data.right.max - this.right.current;
    this.left.remaining = Math.round(this.data.left.max - (value * this.data.left.max / 100));
    this.right.total = this.data.right.initial + this.right.current;
  }
}
