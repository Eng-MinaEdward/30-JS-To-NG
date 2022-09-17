import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1DrumkitComponent } from './task1-drumkit.component';

describe('Task1DrumkitComponent', () => {
  let component: Task1DrumkitComponent;
  let fixture: ComponentFixture<Task1DrumkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task1DrumkitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task1DrumkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
