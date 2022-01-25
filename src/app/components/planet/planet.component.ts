import { PlanetService } from './../../services/planet.service';
import { Component, OnInit } from '@angular/core';
import { awsUrl } from 'src/environments/environment';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {


  constructor(public pServ: PlanetService) { }

  imgUrl = `${awsUrl}/planets/image/${this.pServ.planetGc.name}`

  ngOnInit(): void {
  }

}
