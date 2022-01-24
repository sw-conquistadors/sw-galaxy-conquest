import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = "Register a New Account"
  public user = new User(0,'','')
  clientMessage: ClientMessage = new ClientMessage('');
  constructor(private userService: UserService, public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  public registerUser(): void {
    if(this.userService.registerUser(this.user)
    .subscribe(
      data => {
        this.clientMessage.message = `Successfully registered ${data.username}`;
        this.user = data;
     }, // data => this.userService.logger.log(data),
      error => this.clientMessage.message = `Something went wrong. ${error}`   // error => this.userService.logger.error(error)
    )){
        this.authService.authenticated = true;
      }
  }

}
