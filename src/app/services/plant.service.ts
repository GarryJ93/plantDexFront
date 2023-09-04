import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import{ Observable } from 'rxjs';
import { Data } from '@angular/router';
import { APIByID } from '../models/APIById';


@Injectable({
  providedIn: 'root'
})
export class PlantService {
  items: Plant[]=[];

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Data>{
    return this.http.get<Data>('http://localhost:3000/api/plants');
  }

  getPlantById(id: number): Observable<APIByID> {
    return this.http.get<APIByID>(`http://localhost:3000/api/plants/${id}`) 
  }

  addPlant(plant: Plant): Observable<Plant> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
    return this.http.post<Plant>('http://localhost:3000/api/plants', plant, {headers: headers});
  }

  updatePlant(id: number, plant: Plant): Observable<Plant> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
    return this.http.put<Plant>(`http://localhost:3000/api/plants/${id}`, plant, {headers: headers});
  }

  deletePlant(id: number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
    return this.http.delete(`http://localhost:3000/api/plants/${id}`, {headers: headers});
  }
}
