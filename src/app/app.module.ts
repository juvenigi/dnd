import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { FormsModule } from '@angular/forms';
import { DndHistoryListComponent } from './components/dnd-history-list/dnd-history-list.component';
import { CharSheetStatsComponent } from './components/char-sheet-stats/char-sheet-stats.component';
import { ActionContainerComponent } from './components/action-container/action-container.component';
import { ActionEntryComponent } from './components/action-entry/action-entry.component';
import { DieRollerHealthComponent } from './die-roller-health/die-roller-health.component';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    DndHistoryListComponent,
    CharSheetStatsComponent,
    ActionContainerComponent,
    ActionEntryComponent,
    DieRollerHealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
