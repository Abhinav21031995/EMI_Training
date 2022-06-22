import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
emp: Employee={id:0,name:'',designation:'',department:'',Gender:'',sales:''}
isDataLoading=true;
  constructor(private empService:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
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

  public deleteEmployee(id:any)
  {
    this.isDataLoading=true;
    this.empService.deleteEmployee(id).subscribe(response=>{
      this.isDataLoading=false;
      this.router.navigate(['/list']);
    },err=>{
      console.log(err);
      this.isDataLoading=false;
    })
  }

}
