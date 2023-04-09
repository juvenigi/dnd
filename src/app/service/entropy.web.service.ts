import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntropyWebService {

  //mainUrl: string = "http://127.0.0.1:8000/api"
  mainUrl: string = "http://localhost:8000/api"

  constructor(
    private http: HttpClient
  ) { }

  public getRandomFloat() {
    return this.http.get<number>(this.mainUrl+"/random");
  }
}
