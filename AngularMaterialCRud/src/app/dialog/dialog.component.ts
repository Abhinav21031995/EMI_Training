import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  emp=new Employee();
  isDataLoading=true;
  empForm:FormGroup;
  constructor(private route:ActivatedRoute,private router:Router,private empService:EmployeeService,private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.empForm=this.fb.group({
      name:['',[Validators.required]],
      designation:['',[Validators.required]],
      Gender:['',[Validators.required]],
      department:['',[Validators.required]],
    });
    this.empForm.get('name').disable();
    this.empForm.get('Gender').disable();
    
    this.getEmployee(this.route.snapshot.params['id']);
  }
  public getEmployee(id:any)
  {
    this.empService.getEmployeeById(id).subscribe(response=>{
      this.isDataLoading=false;
      this.emp=response;
      console.log(this.emp);
    })
  }

  OnFormSubmit(empForm:any){
    this.isDataLoading=false;
    this.empService.editEmployee(this.route.snapshot.params['id'],empForm).subscribe(res=>{
      // const id = response['id'];
      // this.router.navigate(['/list']); 
      this.emp =res;
      this.router.navigate(['/list']);
    })
    }  
  }
  