import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaleService {

  constructor( private http: HttpClient) { }

  url="https://gestionale1-fd03a-default-rtdb.europe-west1.firebasedatabase.app/dipendenti.json"

  firebaseURL="https://gestionale1-fd03a-default-rtdb.europe-west1.firebasedatabase.app/dipendenti"


  insertPersonale(body:{}){
    return this.http.post(this.url, body)
  }

  getPersonale(){
    return this.http.get(this.url)
  }

  putPersonale(idFirebase:string, body:{}){
    return this.http.put(`${this.firebaseURL}/${idFirebase}.json`, body)
  }

  deletePersonale(idFirebase:string){
    return this.http.delete(`${this.firebaseURL}/${idFirebase}.json`)
  }
}
