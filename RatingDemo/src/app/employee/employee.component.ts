import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:Employee | undefined;
  constructor() { }

  ngOnInit(): void {
   
  }

}
