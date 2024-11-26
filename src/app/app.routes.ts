import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {
        path:"home",component:HomeComponent
        },
    {
    path:"about",component:AboutComponent
    },
    {
    path:"login",component:LoginComponent
    },
    {
        path:"signup",component:SignupComponent
    },
    {
        path:"contact",component:ContactComponent
    },
    {
        path:"services",component:ServicesComponent
    }
];
