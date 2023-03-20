import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class LoginComponent {

  email!:string
  password!:string

  constructor(private auth:AuthService, private router:Router){}



  onSubmit(form: NgForm, email:string, password:string){
    this.auth.signIn({email, password, returnSecureToken:true}).subscribe((data:any)=>{this.auth.isAuth=true
    this.router.navigate(['Dashboard']);
    this.auth.createUser(data.email, data.localId, data.idToken, data.expiresIn, this.auth.isAuth)
    localStorage.setItem("user", JSON.stringify(this.auth.user))
    form.reset()
    })
  }

}
