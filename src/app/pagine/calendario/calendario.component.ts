import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CalendarService } from 'src/app/service/calendar.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
    animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class CalendarioComponent implements OnInit{

  constructor( private calendar: CalendarService){}

  eventi:any
  idFirebase:any

  ngOnInit(): void {
    this.calendar.getEvento().subscribe((data:any)=>{this.eventi= Object.keys(data).map((key)=>{return data[key]})
    this.idFirebase=(Object.keys(data))
    console.log(this.idFirebase)});
  }

  AggiungiEvento(form:NgForm, date:string, evento:string): void{
    this.calendar.insertEvento({date, evento}).subscribe(data=>console.log(data))
    form.reset({})
  }

  ModificaEvento(form:NgForm, idFirebase:string, date:string, evento:string){
    this.calendar.putEvento(idFirebase,{date, evento}).subscribe(data=>console.log(data))
    form.reset({})
  }

  EliminaEvento(form:NgForm, idFirebase:string){
    this.calendar.deleteEvento(idFirebase).subscribe(data=>console.log(data))
    form.reset({})
  }
}
