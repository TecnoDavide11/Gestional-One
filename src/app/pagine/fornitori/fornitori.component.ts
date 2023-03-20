import { Component, OnInit } from '@angular/core';
import { FornitorService } from 'src/app/service/fornitor.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fornitori',
  templateUrl: './fornitori.component.html',
  styleUrls: ['./fornitori.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})


export class FornitoriComponent implements OnInit {




  constructor( private fornitor : FornitorService){}

  fornitori:any
  idFirebase:any


  AggiungiFornitore(form:NgForm, id:string, azienda:string, email:string, citta:string){
    if(id === undefined || id === "" || azienda === undefined || azienda === "" || citta === undefined || citta === "" || email  === undefined || email  === "" ){
      alert("Compila tutti i dati correttamente")
    }else{
    this.fornitor.insertFornitore({id, azienda, email, citta}).subscribe(data=>console.log(data))
    form.reset({})
  }
}


  ngOnInit(): void {
    this.fornitor.getFornitore().subscribe((data:any)=>{this.fornitori= Object.keys(data).map((key)=>{return data[key]})
    this.idFirebase=(Object.keys(data))
    console.log(this.idFirebase)});
  }


  ModificaFornitore(form:NgForm, idFirebase:string, id:string, azienda:string, email:string, citta:string){
    this.fornitor.putFornitore(idFirebase,{id, azienda, email, citta}).subscribe(data=>console.log(data))
    form.reset({})
  }



  EliminaFornitore(form:NgForm, idFirebase:string){
    this.fornitor.deleteFornitore(idFirebase).subscribe(data=>console.log(data))
    form.reset({})
  }

}
