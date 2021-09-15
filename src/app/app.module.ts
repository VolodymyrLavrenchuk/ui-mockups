import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrowthSliderComponent } from './growth-slider/growth-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    GrowthSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
