import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router,private matdialog:MatDialog,private toastr:ToastrService) { }

  username: string | undefined;
  password: string | undefined;
 
   ngOnInit() {
   }
 
   login() : void {
     if(this.username == 'user' && this.password == 'user'){
      
      this.router.navigate(["request"]);
      this.toastr.success();
      this.matdialog.closeAll();
      
    
    }else if (this.username=='admin' && this.password=='admin'){
       this.router.navigate(["approval"]);
       this.toastr.success();
       this.matdialog.closeAll();
    
     }else{
       alert("Invalid credentials");
       this.toastr.error();
     }
     
     
   }
   }
 
 
