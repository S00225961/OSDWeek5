import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { computed } from '@angular/core';
import { Signal } from '@angular/core';
import { WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService { 
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor() { }
  increment(){
    this.count.update(value => value + 1);

  }
  decrement(){
    this.count.update(value => Math.max(value - 1, 0));
  }
  getCount(){
    return this.count();

  }
  
}
