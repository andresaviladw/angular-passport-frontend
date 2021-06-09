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
    public token:any;

    public loggedChanged = new Subject<boolean>();


    constructor(
        public _http: HttpClient
    ) {
        this.url = global.url;
        this.url_auth = global.authUrl;

    }

    register(user:any): Observable<any>{
        
        //Peticion|Parametros|Envio de cabeceras
        return this._http.post(this.url+'/register',user);
    }

    signup(user: any): Observable<any> {


        //Peticion|Parametros|Envio de cabeceras
        return this._http.post(this.url_auth, user);

    }

    //Save token 
    login(token: any): void {
        
        this.loggedChanged.next(true);

        return token
        
    }

    getToken(){
        this.token='Bearer '+localStorage.getItem('token');

        return this.token
    }

    logout() {
        localStorage.removeItem('token');
        this.loggedChanged.next(false);
    }
    isUserLoggedIn(): Subject<boolean> {
        
        return this.loggedChanged;
    }
}