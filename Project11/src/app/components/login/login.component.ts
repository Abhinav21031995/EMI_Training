import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginsService } from 'src/app/services/logins.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
constructor(private router:Router,private matDialog:MatDialog,private service:LoginsService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
 }

  // username: string | undefined;
  // password: string | undefined;
 

 
  // login() : void {
  //   if(this.username == 'user' && this.password == 'user'){
  //      this.router.navigate(["request"]);
  //      this.toastr.success();
  //      this.matdialog.closeAll();
      
    
  //   }else if (this.username=='admin' && this.password=='admin'){
  //      this.router.navigate(["approval"]);
  //      this.toastr.success();
  //      this.matdialog.closeAll();
    
  //    }else{
  //      alert("Invalid credentials");
  //      this.toastr.error();
  //    }
     
     
  //  }
  
 
public onSubmit(form:NgForm){
  this.service.authenticateEmployee(form.value);
  this.matDialog.closeAll();
}
  }
