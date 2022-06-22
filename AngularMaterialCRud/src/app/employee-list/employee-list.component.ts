import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns:string[]=['name','designation','department','Gender']
data:Employee[]=[];
isDataLoading=true;
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(response=>{
      this.data=response;
      console.log(this.data);
      this.isDataLoading=false;
    },err=>{
      console.log(err);
      this.isDataLoading=false;
    })
  }

}
