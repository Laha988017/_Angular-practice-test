import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormPipesComponent } from './date-form-pipes.component';

describe('DateFormPipesComponent', () => {
  let component: DateFormPipesComponent;
  let fixture: ComponentFixture<DateFormPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateFormPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFormPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
