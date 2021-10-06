import { Component } from '@angular/core';

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
}
