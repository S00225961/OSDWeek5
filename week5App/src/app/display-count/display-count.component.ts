import { Component } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-display-count',
  standalone: true,
  imports: [],
  templateUrl: './display-count.component.html',
  styleUrl: './display-count.component.css'
})
export class DisplayCountComponent {
  constructor(private countService: CountService){}
  displayCount(){
    return this.countService.getCount();
  }


}
