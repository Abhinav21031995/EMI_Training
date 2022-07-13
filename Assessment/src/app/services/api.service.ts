import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  requestProduct: any;
  getRequest: any;
  deleteBook(id: number) {
    throw new Error('Method not implemented.');
  }
base_Url="http://localhost:3000/Books"
  constructor(private http :HttpClient) { }
  postProduct(data:any){
    return this.http.post<any>("http://localhost:3000/Books/",data)
  }
  getProduct(){
    return this.http.get<any>("http://localhost:3000/Books/")
  }
  putProduct(data:any,id:number){

    return this.http.put<any>(" http://localhost:3000/Books/" +id,data)


}

postBook(data:any,id:number){ return this.http.put<any>(" http://localhost:3000/Books/" ,data)


}

  deleteProduct(id:number){

    return this.http.delete<any>(" http://localhost:3000/Books/" +id);

  }
  
}
