import { Component, OnInit } from '@angular/core';
import { PlanetGc } from 'src/app/models/planetGc';
import { awsUrl } from 'src/environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  title= "Star Wars: Galaxy Conquest!"
  constructor() { }
  public planets: PlanetGc[] = [];

  public baseImg = `${awsUrl}/planets/image/`
  ngOnInit(): void {
  }

}
