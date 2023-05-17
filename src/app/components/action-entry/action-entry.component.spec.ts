import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionEntryComponent } from './action-entry.component';

describe('ActionEntryComponent', () => {
  let component: ActionEntryComponent;
  let fixture: ComponentFixture<ActionEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
