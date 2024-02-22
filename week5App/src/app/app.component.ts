import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountService } from './count.service';
import { DisplayCountComponent } from './display-count/display-count.component';
import { DisplayDoubleCountComponent } from './display-double-count/display-double-count.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayCountComponent, DisplayDoubleCountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week5App';
  constructor(private countService: CountService){}
  
  increment(){
    this.countService.increment();

  }
  decrement(){
    this.countService.decrement();
  }
}
