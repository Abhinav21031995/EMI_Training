import { Component, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../employee';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
  
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee;
@Output() addemprecord: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor() { 
    this.employee=new Employee();
  }


  AddEmployeeDetails()
  {
    const data={

      empid:this.employee.empid,
      name:this.employee.name,
      location:this.employee.location
    };

    this.addemprecord.emit(data);
  }
  ngOnInit() {
  }

}
