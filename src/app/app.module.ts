import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { routing, appRoutingProvider } from "./app.routing";

import { AppComponent } from './app.component';
import { LoginComponent } from './RoleUser/login/login.component';
import { SecureComponent } from './RoleUser/secure/secure.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProvider,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
