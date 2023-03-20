import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor( private http:HttpClient) { }

  url="https://gestionale1-fd03a-default-rtdb.europe-west1.firebasedatabase.app/calendario.json"

  firebaseURL="https://gestionale1-fd03a-default-rtdb.europe-west1.firebasedatabase.app/calendario"

  insertEvento(body:{}){
    return this.http.post(this.url, body)
  }

  getEvento(){
    return this.http.get(this.url)
  }

  putEvento(idFirebase:string, body:{}){
    return this.http.put(`${this.firebaseURL}/${idFirebase}.json`, body)
  }

  deleteEvento(idFirebase:string){
    return this.http.delete(`${this.firebaseURL}/${idFirebase}.json`)
  }


}
