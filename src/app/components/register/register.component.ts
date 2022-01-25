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

  title = "register a new account"
  public user = new User(0,'','')
  clientMessage: ClientMessage = new ClientMessage('');
  constructor(private userService: UserService, public authService: AuthenticationService) { }
  alertString = "";

  ngOnInit(): void {
  }

  public registerUser(): void {
    this.userService.registerUser(this.user)
    .subscribe(
      data => {
        this.alertString = "alert alert-success"
        this.clientMessage.message = `Successfully registered ${data.username}`;
        this.user = data;
        this.authService.authenticated = true;
     },
      error => {
        this.alertString = "alert alert-danger"
        this.clientMessage.message = `${error} Username ${this.user.username} already exists!`
      }
    )
  }

}
