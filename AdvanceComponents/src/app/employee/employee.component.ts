import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee: IEmployee[];
  constructor(private empservice: EmployeeService) { }


ngOnInit()
{
  this.empservice.getEmployees().subscribe(employee=>this.employee=employee);
}
  

}
