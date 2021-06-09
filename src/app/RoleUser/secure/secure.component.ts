import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from '../../services/global.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  public user: any;
  private token: any;
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _userService: UserService
  ) {

    this.token = this._userService.getToken();

  }

  ngOnInit(): void {
    const headers = new HttpHeaders().set('Authorization', this.token)
    this._http.get(global.url + '/user', { headers: headers }).subscribe(
      result => {
        this._userService.login(this.token);
        this.user = result 
      },
      error => {
        this._userService.logout()
        this._router.navigate(['/login'])
      }
    );
  }

}