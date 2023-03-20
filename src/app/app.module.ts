import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componenti/login/login.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';

import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { HomeComponent } from './componenti/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MagazzinoComponent } from './pagine/magazzino/magazzino.component';
import { DipendentiComponent } from './pagine/dipendenti/dipendenti.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { DashComponent } from './pagine/dash/dash.component';
import { CalendarioComponent } from './pagine/calendario/calendario.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { FornitoriComponent } from './pagine/fornitori/fornitori.component';
import { ClientiComponent } from './pagine/clienti/clienti.component';
import { NgChartsModule } from 'ng2-charts';
import {MatTabsModule} from '@angular/material/tabs';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    MagazzinoComponent,
    DipendentiComponent,
    DashComponent,
    CalendarioComponent,
    FornitoriComponent,
    ClientiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    NgChartsModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
