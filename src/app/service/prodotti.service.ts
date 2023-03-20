import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService implements OnInit {

  constructor( private http: HttpClient) { }

  firebaseUrl="https://gestionale1-fd03a-default-rtdb.europe-west1.firebasedatabase.app/magazzino"

  url="https://gestionale1-fd03a-default-rtdb.europe-west1.firebasedatabase.app/magazzino.json"




  ngOnInit(){}


  //richiesta al database di inserire un prodotto
  insertProdotto(body:{}){
    return this.http.post(this.url, body)

  }

  //richiesta al database di leggere i prodotti nel databse
  getProdotto(){
    return this.http.get(this.url)
  }


  //richiesta al database di modificare i prodotti nel databse
  putProdotto(idFirebase:string, body:{}){
    return this.http.put(`${this.firebaseUrl}/${idFirebase}.json`, body)
  }

  deleteProdotto(idFirebase:string){
    return this.http.delete(`${this.firebaseUrl}/${idFirebase}.json`)
  }

}

