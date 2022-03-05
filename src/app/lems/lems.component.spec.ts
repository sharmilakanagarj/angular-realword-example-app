import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemsComponent } from './lems.component';

describe('LemsComponent', () => {
  let component: LemsComponent;
  let fixture: ComponentFixture<LemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
