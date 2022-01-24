import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticated: boolean = false;
  constructor() { }
}
