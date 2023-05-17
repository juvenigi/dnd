import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharSheetStatsComponent } from './char-sheet-stats.component';

describe('CharSheetStatsComponent', () => {
  let component: CharSheetStatsComponent;
  let fixture: ComponentFixture<CharSheetStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharSheetStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharSheetStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
