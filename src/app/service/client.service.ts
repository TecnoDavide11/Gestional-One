import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor( private http: HttpClient) { }

  firebaseUrl="https://gestionale1-fd03a-default-rtdb.europe-west1.firebasedatabase.app/clienti"

  url="https://gestionale1-fd03a-default-rtdb.europe-west1.firebasedatabase.app/clienti.json"

    //richiesta al database di inserire un CLiente
    insertCliente(body:{}){
      return this.http.post(this.url, body)

    }

    //richiesta al database di leggere i Clienti
    getCliente(){
      return this.http.get(this.url)
    }


    //richiesta al database di modificare i clienti nel databse
    putCliente(idFirebase:string, body:{}){
      return this.http.put(`${this.firebaseUrl}/${idFirebase}.json`, body)
    }

    deleteCliente(idFirebase:string){
      return this.http.delete(`${this.firebaseUrl}/${idFirebase}.json`)
    }

}
