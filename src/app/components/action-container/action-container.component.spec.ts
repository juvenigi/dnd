import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionContainerComponent } from './action-container.component';

describe('ActionContainerComponent', () => {
  let component: ActionContainerComponent;
  let fixture: ComponentFixture<ActionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
