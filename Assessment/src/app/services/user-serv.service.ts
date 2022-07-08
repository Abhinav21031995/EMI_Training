import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServService {
  http: any;


  constructor() { }
  requestBook(data:any){
    return this.http.post(" http://localhost:3000/Books",data)
  }
}

