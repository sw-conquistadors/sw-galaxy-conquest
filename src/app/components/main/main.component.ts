import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = "Star Wars: Galaxy Conquest!"
  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
