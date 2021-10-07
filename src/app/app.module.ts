import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { GrowthSliderComponent } from './growth-slider/growth-slider.component';
import { GrowthSliderV2Component } from './growth-slider-v2/growth-slider-v2.component';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GrowthSliderComponent, GrowthSliderV2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
