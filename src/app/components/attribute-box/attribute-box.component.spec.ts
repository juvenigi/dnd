import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBoxComponent } from './attribute-box.component';

describe('AttributeBoxComponent', () => {
  let component: AttributeBoxComponent;
  let fixture: ComponentFixture<AttributeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
