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

  public planets: Planet[] = [];

  public baseImg = `${awsUrl}/planets/image/`

  public planet: Planet = new Planet('','','','','','','','','','')
  public planetGc: PlanetGc = new PlanetGc('','','','','','','','','','','','','')

  constructor(private pServ: PlanetService) { }

  ngOnInit(): void {
    this.findAllPlanets();
    console.log(this.planets)
  }

  findAllPlanets() {
    // We are calling a method from the user service that will return an Observable
    this.planets = this.pServ.findAllPlanets();
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
