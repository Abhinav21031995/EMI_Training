import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  constructor(private http :HttpClient) { }

postProduct(data:any){
  return this.http.post<any>("http://localhost:3000/DetailList/",data)
}
getProduct(data:any){
  return this.http.get<any>("http://localhost:3000/DetailList/")
}
deleteProduct(id:number){
  return this.http.delete<any>("http://localhost:3000/DetailList/"+id)
}

}
