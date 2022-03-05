import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimsComponent } from './tims.component';

describe('TimsComponent', () => {
  let component: TimsComponent;
  let fixture: ComponentFixture<TimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
