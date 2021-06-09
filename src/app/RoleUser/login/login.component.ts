import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user: User;

  public page_title: string;

  public user_data: any;

  constructor(
    private _userService: UserService,
    private _router: Router
  ) {
    this.page_title = 'Login';

    this.user = new User(1, '', '', '');
  }

  ngOnInit(): void {
  }


  onSubmit(form: any) {
    this.user_data = {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'NBalaKCIbIwLeIU5Kqrk6ftFDrL9ZnxWo4CDBthu',
      scope: '*',
      username: this.user.email,
      password: this.user.password,
    }

    this._userService.signup(this.user_data).subscribe(
      result => {

        this._router.navigate(['/secure']);
        localStorage.setItem('token', result.access_token);

  
      },
      error => {
        console.log(error);
      }
    );
 

  }

}