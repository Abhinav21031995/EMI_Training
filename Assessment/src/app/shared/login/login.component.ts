import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/admin/admin/admin.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  hide: boolean = false;

  constructor(private fb: FormBuilder, private router:RouterModule) {
  }
  email:string | undefined;
  password:string | undefined;
//   onclick(){
//    this['router'].navigate([`DialogComponent`])
//  }
  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onlogin() : void {
    if(this.email == 'user@gmail.com' && this.password == 'user1234'){
    //  this['router'].navigate(["user"]);
     this.router.navigate(["user"])
    }else if (this.email=='admin@gmail.com' && this.password=='admin1234'){
      // this['router'].navigate(["admin"]);
       this.router.navigate(["admin"])
    }else{
      alert("Invalid credentials");
    }

     this['matdialog'].closeAll();
    
  }

}