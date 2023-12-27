import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.scss'],
  standalone: true,
  imports: [
    NgFor
  ]
})
export class SignalsDemoComponent {

  actions: string[] = [];
  counter = signal(0);

  inc() {
    this.counter.update((oldCounter) =>  oldCounter + 1);
    this.actions.push('INCREMENT');
  }

  dec() {
    this.counter.update((oldCounter) =>  oldCounter - 1);
    this.actions.push('DECREMENT');
  }

}
