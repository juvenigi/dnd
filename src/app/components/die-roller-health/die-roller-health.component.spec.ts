import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieRollerHealthComponent } from './die-roller-health.component';

describe('DieRollerHealthComponent', () => {
  let component: DieRollerHealthComponent;
  let fixture: ComponentFixture<DieRollerHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieRollerHealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieRollerHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
