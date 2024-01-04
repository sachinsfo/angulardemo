import { NgFor } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';

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

  actions = signal<string[]>([]);
  counter = signal(0);
  computedCounter = computed(() => this.counter() * 2);

  constructor() {
    // Typically used to handle signal changes
    effect(() => console.log('Counter changed to ==> ', this.counter()));
  }

  inc() {
    // this.counter.update((oldCounter) =>  oldCounter + 1);
    this.counter.set(this.counter() + 1);
    // this.actions.push('INCREMENT');
    this.actions.update((oldArray) => [...oldArray, 'INCREMENT']);
  }

  dec() {
    this.counter.update((oldCounter) =>  oldCounter - 1);
    this.actions.update((oldArray) => [...oldArray, 'DECREMENT']);
    // this.actions.push('DECREMENT');
  }

}
