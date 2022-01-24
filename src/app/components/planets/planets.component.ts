import { localUrl } from './../../../environments/environment';
import { PlanetService } from './../../services/planet.service';
import { Planet } from './../../models/planet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  title = "Explore the Planets"

  public planets: Planet[] = [];

  public baseImg = `${localUrl}/planets/image/`

  constructor(private pServ: PlanetService) { }

  ngOnInit(): void {
    this.findAllPlanets();
    console.log(this.planets)
  }

  findAllPlanets() {
    // We are calling a method from the user service that will return an Observable
    this.planets = this.pServ.findAllPlanets();
  }



}
