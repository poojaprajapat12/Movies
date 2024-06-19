import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'', redirectTo:'login' ,  pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'header' , component:HeaderComponent},
    {path:'login' , component:LoginComponent},
    {path:'**' , component:LoginComponent}
];
