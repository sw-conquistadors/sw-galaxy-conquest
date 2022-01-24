import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
//import { NavComponent.authenticated } from 'src/app/components/nav/nav.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title= "Log In";
  public user = new User('','')
  clientMessage: ClientMessage = new ClientMessage('');
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public validateUser(username: string, password: string): void {
    this.user.username = username;
    this.user.password = password;
    if(this.userService.validateUser(this.user)
      .subscribe(
        data => this.clientMessage.message = `Hello ${data.username}`, // data => this.userService.logger.log(data),
        error => this.clientMessage.message = `Unable to Login with that username and password`   // error => this.userService.logger.error(error)
      )){
        //authenticated = true;
      }
  }

}
