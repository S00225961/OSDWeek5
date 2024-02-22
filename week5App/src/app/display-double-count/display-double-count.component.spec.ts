import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDoubleCountComponent } from './display-double-count.component';

describe('DisplayDoubleCountComponent', () => {
  let component: DisplayDoubleCountComponent;
  let fixture: ComponentFixture<DisplayDoubleCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDoubleCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayDoubleCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
