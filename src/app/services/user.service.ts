import { localUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { User } from '../models/user';
import { catchError, Observable, throwError } from 'rxjs';
import { awsUrl } from 'src/environments/environment'

const url = `${awsUrl}/users`
const lUrl = `${localUrl}/users`

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // get all
  findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(url)
            .pipe(catchError(this.handleError));
  }

  registerUser(user: User): Observable<User> {
    console.log('This is url of registered User')
    console.log(`${url}/add`)
    return this.http.post<User>(`${url}/add`, user, this.httpOptions)
          .pipe(catchError(this.handleError));
  }

  // get 1
  findUserById(id: number): Observable<User> {
    return this.http.get<User>(`${url}/${id}`)
            .pipe(catchError(this.handleError));
  }

  // delete
  removeUserById(id: number) {
    return this.http.delete<User>(`${url}/${id}`)
            .pipe(catchError(this.handleError));
  }

    // validate
    validateUser(user: User) {
      console.log('This is url of logging in User')
      console.log(`${url}/validate`)
      console.log(user)
      return this.http.post<User>(`${url}/validate`, user, this.httpOptions)
              .pipe(catchError(this.handleError));
    }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log('An error occurred: ', httpError.error.message)
    } else {
      console.dir(httpError)
      console.error(`
        Backend returned code ${httpError.status},
        body was: ${httpError.error}
      `)
    }
    return throwError(() => new Error('Something really bad happened, please try again later'))
  }

}

