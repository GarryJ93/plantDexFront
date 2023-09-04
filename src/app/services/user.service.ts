import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connexion } from '../models/Connexion';

@Injectable({
  providedIn: 'root'
})
export class UserService {

items: User[]=[];

  constructor(private http: HttpClient) { }
  
  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users/signup', user);
  }

  
}
