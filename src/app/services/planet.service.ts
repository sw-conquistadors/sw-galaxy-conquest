import { awsUrl, swapiUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Planet } from '../models/planet';
import { PlanetGc } from '../models/planetGc';

const url = `${awsUrl}`
const sUrl = `${swapiUrl}`

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  findAllPlanets(): Planet[] {
    let planets: Planet[] = [];

    for (let i = 1; i <= 1; i++ ) {

      this.http.get<Planet>(`${sUrl}/${i}`)
        .subscribe(data => {
          planets.push(data)
        }, error => this.handleError(error));
    }

      return planets

  }

  findGalaxy(id: number): PlanetGc[] {
    let planets: PlanetGc[] = [];

    this.http.get<PlanetGc[]>(`${url}/galaxies/${id}`)
      .subscribe(
        data => planets = data,
        error => this.handleError(error));

    return planets

  }

  findPlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${sUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  findPlaneGc(id: number): Observable<PlanetGc> {
    return this.http.get<PlanetGc>(`${awsUrl}/planets/${id}`)
      .pipe(catchError(this.handleError));
  }

  findPlanetByName(name: string): Observable<PlanetGc> {
    return this.http.get<PlanetGc>(`${awsUrl}/planets/find/${name}`)
      .pipe(catchError(this.handleError));
  }


  handleError(httpError : HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log('An error occurred: ', httpError.error.message)
    } else {
      console.error(`
        Backend returned code ${httpError.status},
        body was: ${httpError.error}
      `)
    }
    // throwError is an Observable object from RxJS Reactive Extensions for JavaScript
    return throwError(() => new Error('Something really bad happened, please try again later'));
  }

}
