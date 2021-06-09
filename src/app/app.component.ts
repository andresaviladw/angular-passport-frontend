import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaFrontend';
  loggedIn:any;

  constructor(
    private _userService:UserService
  )
  {

  }

  ngOnInit(): void {
    
    this._userService.isUserLoggedIn().subscribe(
      result => {
        this.loggedIn = result 
        
      },error=>{
        console.log(error);
        
      }

    );

    
    
  }

  logout(): void {
    this._userService.logout();
  }

  
}