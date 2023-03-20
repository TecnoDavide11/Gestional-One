import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { CalendarioComponent } from './pagine/calendario/calendario.component';
import { ClientiComponent } from './pagine/clienti/clienti.component';
import { DashComponent } from './pagine/dash/dash.component';
import { DipendentiComponent } from './pagine/dipendenti/dipendenti.component';
import { FornitoriComponent } from './pagine/fornitori/fornitori.component';
import { MagazzinoComponent } from './pagine/magazzino/magazzino.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"Login", component:LoginComponent},
  {path:"Dashboard", component:DashboardComponent,canActivate:[AuthGuard], children:[
    { path: '', redirectTo: 'Dash', pathMatch: 'full' },
    {path:"Dash", component:DashComponent},
    {path:"Magazzino", component:MagazzinoComponent},
    {path:"Dipendenti", component:DipendentiComponent},
    {path:"Calendario", component:CalendarioComponent},
    {path:"Fornitori", component:FornitoriComponent},
    {path:"Clienti", component:ClientiComponent},]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
