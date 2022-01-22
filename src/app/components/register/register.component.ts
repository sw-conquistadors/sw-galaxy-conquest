import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = "Resister a New Account"
  public user = new User(0,'','')
  clientMessage: ClientMessage = new ClientMessage('');
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public registerUser(): void {
    this.userService.registerUser(this.user)
      .subscribe(
        data => this.clientMessage.message = `Successfully registered ${data.username}`, // data => this.userService.logger.log(data),
        error => this.clientMessage.message = `Something went wrong. ${error}`   // error => this.userService.logger.error(error)
      )
  }

}
