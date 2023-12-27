import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class SignalsDemoComponent {

  actions: string[] = [];
  counter = 0;

  inc() {
    this.counter++;
    this.actions.push('INCREMENT');
  }

  dec() {
    this.counter--;
    this.actions.push('DECREMENT');
  }

}
