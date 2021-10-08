import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { GrowthSliderComponent } from './growth-slider/growth-slider.component';
import { GrowthSliderV2Component } from './growth-slider-v2/growth-slider-v2.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, GrowthSliderComponent, GrowthSliderV2Component],
  bootstrap: [AppComponent]
})
export class AppModule {
}
