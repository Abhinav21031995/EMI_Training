import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent implements OnInit {
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
  // loginForm: FormGroup;
  // title = 'loginForm';

  // constructor(
  //   private router:Router
  // ) {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
  //       '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
  //     ),]),
  //     password: new FormControl('', [Validators.required,Validators.pattern(
  //       '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
  //     )])
  //   });
  
//   constructor(private Router: Router) { }

//   username: string;
//   password: string;

//   ngOnInit(); void {
//   }
//   login() ; void {
//     if(this.username == 'admin' && this.password == 'admin'){
//      this.router.navigate(["user"]);
//     }else {
//       alert("Invalid credentials");
//     }

//   // onSubmit(){
//   //   if(!this.loginForm.valid){
//   //     return;
//   //   }
//   //   localStorage.setItem('',this.loginForm.value)
//   //   this.router.navigate(['/login'])
//   // }
// }
// function private(private: any, router: any, Router: typeof Router) {
//   throw new Error('Function not implemented.');
// }

// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

// function login() {
//   throw new Error('Function not implemented.');
// }
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 
    // username: string 
    // password: string 
    }

  username!: string; 
  password!: string; 

  ngOnInit() {
  }

  login() : void {
    if(this.username === 'admin' && this.password === 'admin'){
    //  this.router.navigate([`adminopration`]);
     console.log("This is running")
    }else {
      alert("Invalid credentials");
    }
  }
  }

