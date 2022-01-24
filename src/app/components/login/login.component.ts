import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public authenticated: boolean = false;
  title= "Log In";
  public user = new User(0,'','')
  clientMessage: ClientMessage = new ClientMessage('');
  constructor(private userService: UserService, public authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  public validateUser(): void {
    if(this.userService.validateUser(this.user)
      .subscribe(
        data => {
          this.user = data;
          this.clientMessage.message = `Hello ${data.username}`;
       },
        error => this.clientMessage.message = `Unable to Login with that username and password`   // error => this.userService.logger.error(error)
      )){
        this.authService.authenticated = true;
      }
  }

  public updateUser(): void {
    if(this.userService.registerUser(this.user)
    .subscribe(
      data => {
        this.user = data;
        this.clientMessage.message = `Successfully updated ${data.username}`;
     }, // data => this.userService.logger.log(data),
      error => this.clientMessage.message = `Something went wrong. ${error}`   // error => this.userService.logger.error(error)
    )){
      this.authService.authenticated = true;
    }
  }

}
