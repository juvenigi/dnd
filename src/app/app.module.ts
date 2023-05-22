import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SandboxComponent} from './components/sandbox/sandbox.component';
import {FormsModule} from '@angular/forms';
import {DndHistoryListComponent} from './components/dnd-history-list/dnd-history-list.component';
import {CharSheetStatsComponent} from './components/char-sheet-stats/char-sheet-stats.component';
import {ActionContainerComponent} from './components/action-container/action-container.component';
import {ActionEntryComponent} from './components/action-entry/action-entry.component';
import {DieRollerHealthComponent} from './die-roller-health/die-roller-health.component';
import {
  GoogleInitOptions,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";
import {Environment} from "../environments/environment";

export const googleLoginOptions: GoogleInitOptions = {
  oneTapEnabled: true, // default is true
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.metadata'
  ]
};
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
    FormsModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '473773108505-edl4nmrm6oakt1050fdaorbqmh5a4a51.apps.googleusercontent.com',
              googleLoginOptions
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

