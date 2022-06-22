import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  months = ['jan', 'feb', 'March', 'April', 'May', 'June', 'July'];
  todaydate = new Date();
  jsonvalue = {name: 'Alex', age: 34, address: { a1: 'Paris', a2: 'France'}};
  details:any[];
  public showData=false;
  public buttonName:string='Show';
  ID:string;
  name:string;
  location:string;
  constructor(private _empservice:EmployeeService,private activate:ActivatedRoute,private router:Router)
  {
   
  }
  ngOnInit(): void {

    this._empservice.getEmployees().subscribe(data=>{
  this.details=data;
  console.log(this.details);
    })
    
  }

  public getQueryParamData():void
  {
    this.ID=this.activate.snapshot.queryParamMap.get('ID');
    this.name=this.activate.snapshot.queryParamMap.get('Name');
    this.location=this.activate.snapshot.queryParamMap.get('Location');
    console.log(this.activate.snapshot.queryParamMap.has('ID'));
    console.log(this.activate.snapshot.queryParamMap.keys);
  }
  public toggle():void{
    this.showData=!this.showData;
  }
  // 
}
 

  








