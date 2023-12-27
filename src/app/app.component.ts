import { Component } from '@angular/core';
import { SignalsDemoComponent } from './signals-demo/signals-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    SignalsDemoComponent
  ]
})
export class AppComponent {
  title = 'signals';
}
