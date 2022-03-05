import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AemsComponent } from './aems.component';

describe('AemsComponent', () => {
  let component: AemsComponent;
  let fixture: ComponentFixture<AemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
