import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Connexion } from '../models/Connexion';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private bddURL = 'http://localhost:3000/api/users';
 
  constructor(private http: HttpClient) { 
  }

  login(email: string, password: string): Observable<Connexion>{
    const body = {email: email, password :password}
    return this.http.post<Connexion>(this.bddURL + '/login', body)
  }


}