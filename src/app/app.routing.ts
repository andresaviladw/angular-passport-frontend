  
//Importar dependencias necesarias
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Componentes
import { LoginComponent } from './RoleUser/login/login.component';
import { SecureComponent } from './RoleUser/secure/secure.component';
import { AppComponent } from './app.component';


const appRoutes: Routes=[

    {path: 'login',component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'secure',component: SecureComponent}

];

//Exportar la configuracion
export const appRoutingProvider:any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);