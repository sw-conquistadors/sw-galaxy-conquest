import { PlanetService } from './../../services/planet.service';
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
  constructor(public pServ: PlanetService) { }
  public planets: PlanetGc[] = [];

  public baseImg = `${awsUrl}/planets/image/`
  ngOnInit(): void {
  }

  showPlanet(name: string) {
    this.pServ.findPlanetGcByName(name).subscribe(
      data => this.pServ.planetGc = data
    )
  }

  findAllPlanets() {
    // We are calling a method from the user service that will return an Observable
    if (this.pServ.planets.length == 0) {
      console.log("Retrieving Planets from API")
      this.pServ.planets = this.pServ.findAllPlanets();
    } else {
      console.log("Retrieving Data from Service")
    }
  }

  findPlanetGc(name: string) {
    this.pServ.findPlanetGcByName(name).subscribe(
      data => this.pServ.planetGc = data
    )
  }

  findPlanet(id: number) {
    this.pServ.findPlanet(id).subscribe(
      data => this.pServ.planet = data
    )
  }

  findPlanetByName(name: string) {
    this.pServ.findPlanetByName(name).subscribe(
      data => this.pServ.planet = data
    )
  }

}
