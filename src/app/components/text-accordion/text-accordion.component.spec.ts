import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAccordionComponent } from './text-accordion.component';

describe('TextAccordionComponent', () => {
  let component: TextAccordionComponent;
  let fixture: ComponentFixture<TextAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
