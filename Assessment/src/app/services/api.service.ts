import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
base_Url="http://localhost:3000/Books"
  constructor(private http :HttpClient) { }
  postProduct(data:any){
    return this.http.post<any>("http://localhost:3000/Books/",data)
  }
  getProduct(data:any){
    return this.http.get<any>("http://localhost:3000/Books/")
  }
}
