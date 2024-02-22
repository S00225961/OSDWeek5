import { Component } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-display-double-count',
  standalone: true,
  imports: [],
  templateUrl: './display-double-count.component.html',
  styleUrl: './display-double-count.component.css'
})
export class DisplayDoubleCountComponent {
  constructor(private countService: CountService){}
  displayDoubleCount(){
    return this.countService.doubleCount();
  }
}
