import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/service/client.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css'],
      animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class ClientiComponent implements OnInit{

  constructor (private client : ClientiService) {}


  clienti:any
  idFirebase:any

AggiungiCliente(form:NgForm, id:string, nome:string, cognome:string, email:string, citta:string){
  if(id === undefined || id === "" || nome === undefined || nome === "" || cognome === undefined || cognome === ""
  || email  === undefined || email  === ""  || citta  === undefined || citta  === ""){
      alert("Compila tutti i dati correttamente")

    }else{

  this.client.insertCliente({id, nome, cognome, email, citta}).subscribe(data=> console.log(data))
  form.reset({})
  }
}

ngOnInit(): void {
  this.client.getCliente().subscribe((data:any)=>{this.clienti= Object.keys(data).map((key)=>{return data[key]})
  this.idFirebase=(Object.keys(data))
  console.log(this.idFirebase)});
}

ModificaCliente(form:NgForm, id:string, nome:string, cognome:string, email:string, citta:string, idFirebase:string){
  this.client.putCliente(idFirebase,{id, nome, cognome, email, citta}).subscribe(data=> console.log(data))
  form.reset({})
}

EliminaCliente(form:NgForm, idFirebase:string){
  this.client.deleteCliente(idFirebase).subscribe(data=>console.log(data))
  form.reset({})
}
}
