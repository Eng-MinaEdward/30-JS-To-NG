import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2JSClockComponent } from './task2-js-clock.component';

describe('Task2JSClockComponent', () => {
  let component: Task2JSClockComponent;
  let fixture: ComponentFixture<Task2JSClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2JSClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task2JSClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
