import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  public logOut(): void{
    this.authService.authenticated = false;
  }
}
