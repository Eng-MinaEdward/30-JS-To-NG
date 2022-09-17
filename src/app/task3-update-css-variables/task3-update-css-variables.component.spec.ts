import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3UpdateCssVariablesComponent } from './task3-update-css-variables.component';

describe('Task3UpdateCssVariablesComponent', () => {
  let component: Task3UpdateCssVariablesComponent;
  let fixture: ComponentFixture<Task3UpdateCssVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task3UpdateCssVariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task3UpdateCssVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
