import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee;
  @Output() addEmployeeRecord:EventEmitter<Employee>=new EventEmitter<Employee>();
  constructor() { 
    this.employee = new Employee();
  }
  ngOnInit(): void {
  }
  public addEmployee(){
    const data ={
      id:this.employee.id,
      name:this.employee.name,
      location:this.employee.location,
      proficiency:this.employee.proficiency
    }
    this.addEmployeeRecord.emit(data);
    console.log(data,'working');
  }
}
