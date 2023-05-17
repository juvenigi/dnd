import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndHistoryListComponent } from './dnd-history-list.component';

describe('DndHistoryListComponent', () => {
  let component: DndHistoryListComponent;
  let fixture: ComponentFixture<DndHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndHistoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DndHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
