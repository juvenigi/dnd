import {Component, inject} from '@angular/core';
import {Die} from './model/enum/die.enum';
import {GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Attributes} from "./model/enum/attributes.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  authService = inject(SocialAuthService);
  http = inject(HttpClient);
  accessToken: string | undefined;

  async getAccessToken() {
    if (!this.accessToken) {
      return this.accessToken = await this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID);
    } else {
      return this.accessToken;
    }
  }

  async testGDrive2() {
    await this.getAccessToken();
    this.http.get('https://www.googleapis.com/drive/v3/files', {
      headers: {Authorization: `Bearer ${this.accessToken}`}
    }).subscribe(console.debug);
  }

  async testGDrive3() {
    await this.getAccessToken();

    this.http.get('https://www.googleapis.com/drive/v3/drives', {
      headers: {Authorization: `Bearer ${this.accessToken}`},
    }).subscribe(console.debug);

    this.http.get('https://www.googleapis.com/drive/v3/files', {
      headers: {Authorization: `Bearer ${this.accessToken}`},
      params: {
        //orderBy:"folder",

        //corpora: "domain",
        q: "'1JVVN4leTXQ46NsPZsPQgnmN0k5I7xaXx' in parents",
        pageSize: 200
      }
    }).subscribe(console.debug);

    this.http.get('https://www.googleapis.com/drive/v3/files', {
      headers: {Authorization: `Bearer ${this.accessToken}`},
      params: {
        //orderBy:"folder",

        //corpora: "domain",
        q: "mimeType = 'application/vnd.google-apps.folder' and 'root' in parents",
        pageSize: 200,
        includeItemsFromAllDrives: true,
        //supportsAllDrives: true
      }
    }).subscribe(console.debug);
  }

  // test():void {
    // let test: Map<Attributes,number[]> = new Map<Set<string>,number[]>();
    // test.set(Attributes.STR, [10,0]);
  // }

  async loadTextFile() {
    const accessToken = await this.getAccessToken();
    this.http.get('https://www.googleapis.com/drive/v3/files/1rqc0YifMrvjQtCkWILGjRLNaInQ2thnB', {
      headers: {Authorization: `Bearer ${accessToken}`}, params: {alt:"media"}
    }).subscribe((next:any) => {
      console.debug(next);
      console.debug(next.test)
    });
  }

  async uploadTextFile() {
    const accessToken = await this.getAccessToken();
    const uploadUrl = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
    const fileName = 'test1.txt';
    const fileContent = JSON.stringify({test: true}); // Replace with the actual file content

    const metadata = {
      name: fileName,
      parents: ['root']
    };

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${accessToken}`);

    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
    formData.append('file', new Blob([fileContent], {type: 'application/json'}));

    this.http.post(uploadUrl, formData, {headers})
      .subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading file:', error);
        }
      );

  }
}

export class Model {
  healcubes = 0;
  die: Die = Die.D20;
  proficiency = 0;
  public health = 0;
  thealth = 0;
  roll = 1;
  rollarray: number[] = [];
}

