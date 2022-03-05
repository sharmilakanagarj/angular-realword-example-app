import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamsComponent } from './fams.component';

describe('FamsComponent', () => {
  let component: FamsComponent;
  let fixture: ComponentFixture<FamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
