import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { User } from "../models/user";
//Importar url global
import { global } from "./global.service";

@Injectable()
export class UserService {

    public url: string;
    public url_auth: string;

    public loggedChanged = new Subject<boolean>();


    constructor(
        public _http: HttpClient
    ) {
        this.url = global.url;
        this.url_auth = global.authUrl;

    }

    signup(user: any): Observable<any> {


        //Peticion|Parametros|Envio de cabeceras
        return this._http.post(this.url_auth, user);

    }

    //Save token 
    login(token: any): void {
        localStorage.setItem('token', token);
        this.loggedChanged.next(true);
        
    }

    logout() {
        localStorage.removeItem('token');
        this.loggedChanged.next(false);
    }
    isUserLoggedIn(): Subject<boolean> {
        
        return this.loggedChanged;
    }
}