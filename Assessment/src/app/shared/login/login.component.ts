import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/admin/admin/admin.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  hide: boolean = false;

  constructor(private fb: FormBuilder, private router:Router,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  username:string | undefined;
password:string | undefined;
  login() : void {
      if(this.username == 'user' && this.password == 'user'){
       this.router.navigate(["user"]);
       this['toast'].success({detail:"login success", summary:"welcome user!!",duration:5000});
      }else if (this.username=='admin' && this.password=='admin'){
        this.router.navigate(["admin"]);
        this['toast'].success({detail:"login success", summary:"welcome admin",duration:5000});
      }else{
        // alert("Invalid credentials");
        // alert("Invalid credentials");
        this['toast'].error({detail:"Invalid credential", summary:"username or password incorrect!",duration:5000});
        
      }
  
      this['matdialog'].closeAll();
      
    }
    }
  
  