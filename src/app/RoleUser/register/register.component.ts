import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public user: User;
  public page_title: string

  constructor(
    private _userService: UserService,
    private _router: Router
  ) {
    this.page_title = 'Register'
    this.user = new User(1, '', '', '')
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {

    this._userService.register(this.user).subscribe(
      result => {
        console.log(result);
        
      },
      error => {
        console.log(error);

      }
    )
  }

}
