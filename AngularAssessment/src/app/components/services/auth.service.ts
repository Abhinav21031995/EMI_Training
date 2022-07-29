import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUser=false;
  isAdmin=false;
  isAuthenticated=false;

  data:any
  user:any
  res:any

  constructor(private http:HttpClient,private router:Router) { }

  public authenticateEmployee(data:any){
    console.log(data);
    return this.http.get("http://localhost:3000/Authentication").subscribe(res=>{
      this.user=res;
      this.data=data;
      this.authenticateUser();
      this.navigate();
    })
  }

  authenticateUser() {
    this.res=(this.user.find((x:any)=>{
      return x.userName==this.data.userName && x.password==this.data.password
    })) 
  }
  navigate() {
    if(this.res){
      this.navigateUser();
    }else{
      alert("invalid login")
    }

  }


  navigateUser(){
      console.log(this.res.userName);
    if(this.res.role==='admin'){
      this.isAdmin=true;
      this.isAuthenticated=true;
      this.router.navigate(['admin']),
      localStorage.setItem('adminName',this.res.firstName);
     alert(" login succesful admin")
    }else if(this.res.role==='user'){

      this.isUser=true;
      this.isAuthenticated=true;
      this.router.navigate(['user']);
      localStorage.setItem('userName',this.res.firstName);
     alert("login successful user")
    }   
  }
}
