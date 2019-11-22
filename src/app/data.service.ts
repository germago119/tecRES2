import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getClient() {
    return this.http.get(
      'https://tecresconstruye20191122051408.azurewebsites.net/api/Cliente'
    );
  }
  getPropiedades() {
    return this.http.get(
      'https://tecresconstruye20191122051408.azurewebsites.net/api/Propiedad'
    );
  }

  postC(json) {
    return this.http.post(
      'https://tecresconstruye20191122051408.azurewebsites.net/api/Cliente',
      json
    );
  }

  postP(json) {
    return this.http.post(
      'https://tecresconstruye20191122051408.azurewebsites.net/api/Propiedad',
      json
    );
  }

}
