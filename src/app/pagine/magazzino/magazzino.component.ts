import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdottiService } from 'src/app/service/prodotti.service';
import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class MagazzinoComponent implements OnInit{

    panelOpenState = false;


  prodotti!:any
  idFirebase!:any

  constructor( private prodottiService:ProdottiService){}

  AggiungiProdotto(form:NgForm, id:any, nome:string, quantita:any, costo:string){
    if(id === undefined || id === "" || nome === undefined || nome === "" || quantita === undefined || quantita === "" || costo === undefined || costo === ""){
      alert("Compila tutti i dati correttamente")

    }else{
     this.prodottiService.insertProdotto({id, nome, quantita, costo}).subscribe(data=>console.log(data))
     form.reset({})
    }
  }



  ModificaProdotto(form:NgForm, idFirebase:string, id:any, nome:string, quantita:any, costo:string){
    this.prodottiService.putProdotto(idFirebase,{id,nome, quantita, costo}).subscribe(data=>console.log(data))
    form.reset({})
  }

  ngOnInit(): void {
    this.prodottiService.getProdotto().subscribe((data:any)=>{console.log(data)
      this.prodotti=Object.keys(data).map((key)=>{return data[key]})
      this.idFirebase=(Object.keys(data))
      console.log(this.idFirebase)})
  }

  EliminaProdotto(form:NgForm, idFirebase:string){
    this.prodottiService.deleteProdotto(idFirebase).subscribe(data=>console.log(data))
    form.reset({})
  }
}



