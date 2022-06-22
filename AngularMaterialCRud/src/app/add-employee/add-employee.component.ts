import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
empForm:FormGroup;
isDataLoading=false;
  constructor(private empService:EmployeeService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.empForm=this.fb.group({
      name:['',Validators.required],
      designation:['Enter Designation',Validators.required],
      department:['',Validators.required],
      Gender:['',Validators.required]
    })
  }

  OnFormSubmit(form: NgForm)
  {
     this.isDataLoading=true;
     this.empService.addEmployee(form).subscribe(response=>{
      const id=response['id'];
      this.router.navigate(['details',id]);
     },error=>{
      console.log(error);
     })
  }

}
