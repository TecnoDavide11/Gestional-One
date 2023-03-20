import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { PersonaleService } from 'src/app/service/personale.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css'],
    animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class DipendentiComponent implements OnInit {

  constructor (private personale:PersonaleService){}

  panelOpenState = false;

  dipendenti:any
  idFirebase:any

  ngOnInit(): void {
    this.personale.getPersonale().subscribe((data:any)=>{this.dipendenti= Object.keys(data).map((key)=>{return data[key]})
    this.idFirebase=(Object.keys(data))
    console.log(this.idFirebase)});
  }

  AggiungiPersonale(form:NgForm, id:string, nome:string, cognome:string, email:string, mansione:string, stipendio:string){
    if(id === undefined || id === "" || nome === undefined || nome === "" || cognome === undefined || cognome === "" || email  === undefined || email  === ""  ||
    mansione  === undefined || mansione  === ""  || stipendio  === undefined || stipendio  === ""){
      alert("Compila tutti i dati correttamente")
    }else{
    this.personale.insertPersonale({id, nome, cognome, email, mansione, stipendio}).subscribe(data=>console.log(data))
    form.reset({})
    }
  }

  ModificaPersonale(form:NgForm, idFirebase:string, id:string, nome:string, cognome:string, email:string, mansione:string, stipendio:string){
    this.personale.putPersonale(idFirebase,{id, nome, cognome, email, mansione, stipendio}).subscribe(data=> console.log(data))
    form.reset({})
  }

  EliminaPersonale(form:NgForm, idFirebase:string){
    this.personale.deletePersonale(idFirebase).subscribe(data=>console.log(data))
    form.reset({})
  }

}
