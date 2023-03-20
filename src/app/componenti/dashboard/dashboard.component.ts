import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit{

  userEmail!: string;

  constructor( private auth: AuthService, private router:Router){

    this.userEmail = auth.getUserEmail();

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }





  onLogout():void{
     // Rimuovi l'utente dal localStorage
     localStorage.removeItem('user');
     // Reindirizza alla pagina di login
    this.router.navigate(['Login']);
  }
}
