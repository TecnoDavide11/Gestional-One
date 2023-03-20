import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FornitorService {

  constructor( private http:HttpClient) { }

  url="https://gestionale1-fd03a-default-rtdb.europe-west1.firebasedatabase.app/fornitori.json"

  firebaseURL="https://gestionale1-fd03a-default-rtdb.europe-west1.firebasedatabase.app/fornitori"

  insertFornitore(body:{}){
    return this.http.post(this.url, body)
  }

  getFornitore(){
    return this.http.get(this.url)
  }

  putFornitore(idFirebase:string, body:{}){
    return this.http.put(`${this.firebaseURL}/${idFirebase}.json`, body)
  }

  deleteFornitore(idFirebase:string){
    return this.http.delete(`${this.firebaseURL}/${idFirebase}.json`)
  }
}

