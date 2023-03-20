import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!:User


  API_KEY="AIzaSyBEGy4Rwq8NjPZ_aWa_vqGNOkcai7Sa5MA"
  url_iscirizione=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`
  url_accesso=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`

  isAuth: boolean=false;

  constructor(private http:HttpClient, private router:Router) {

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.isAuth = user.isAuthenticated || false;
    }

    // Supponiamo che l'email dell'utente sia memorizzata in un campo `email` dell'oggetto `user` nel localStorage.
    getUserEmail(): string {
      const user = JSON.parse(localStorage.getItem('user')|| '{}');
        return user ? user.email : '';
  }



  signUp(body:{}){
    return this.http.post(this.url_iscirizione, body)
  }


  signIn(body:{}){
    return this.http.post(this.url_accesso, body)
  }

  createUser(id:string, email:string, token:string, expirationDate:Date, isAuthenticated:boolean){
    this.user= new User(id, email, token, expirationDate, isAuthenticated)
  }



}
