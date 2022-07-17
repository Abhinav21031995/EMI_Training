import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {
  user:any;
  isAuthenticated=false;
  isAdmin=false;
  isUser=false;
  res:any;
  data:any;
  
  constructor(private http:HttpClient,private router:Router) { }
  public authenticateEmployee(data:any){
    console.log(data);
    return this.http.get("http://localhost:3000/register").subscribe(res=>{
      this.user=res;
      this.data=data;
      this.authenticateUser();
      this.navigateUser();
    })
  }
  authenticateUser(){
    this.res=(this.user.find((x:any)=>{
      return x.firstName==this.data.firstName && x.password==this.data.password

   }))
  }
  navigateUser(){
    if(this.res)
    {
      this.checkRole();
    }
    else{
      alert("invalid Credential")
    }
  }
  checkRole()
  {
    this.isAuthenticated=true;
  if(this.res.role==='manager'){
    this.isAdmin=true;
    this.isAuthenticated=true;
    this.router.navigate(['adminhome']);
  }
  else if(this.res.role==='user')
  {
    this.isUser=true;
    this.isAuthenticated=true;
    this.router.navigate(['emphome']);
  }
  else
  {
    alert("invalid user")
  }
}
}
