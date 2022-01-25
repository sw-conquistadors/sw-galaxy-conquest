import { awsUrl } from './../../../environments/environment';
import { PlanetService } from './../../services/planet.service';
import { Planet } from './../../models/planet';
import { Component, OnInit } from '@angular/core';
import { PlanetGc } from 'src/app/models/planetGc';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  title = "Explore the Planets"

  baseImg = `${awsUrl}/planets/image/`

  planet: Planet = new Planet('','','','','','','','','','')
  planetGc: PlanetGc = new PlanetGc('','','','','','','','','','','','','')

  constructor(public pServ: PlanetService) { }

  ngOnInit(): void {
    this.findAllPlanets();
  }

  showPlanet(name: string) {
    this.pServ.findPlanetByName(name).subscribe(
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
    this.pServ.findPlanetByName(name).subscribe(
      data => this.planetGc = data
    )
  }

  findPlanet(id: number) {
    this.pServ.findPlanet(id).subscribe(
      data => this.planet = data
    )
  }

  showModal() {

  }


}
