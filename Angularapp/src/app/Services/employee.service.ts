import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../Models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empDetails:Employee[];

  constructor() { 

    this.empDetails=[
      new Employee(1,'Sam','Pune','Male',true),
      new Employee(2,'Mayura','Bangalore','FEMALE',false),
      new Employee(3,'Anita','Delhi','Female',true),
      new Employee(4,'John','Punjab','Male',false),
    ];
  }

  public getEmployees():Observable<Employee[]>{
 
    return of(this.empDetails);
  }

  public getEmployeebyId(id:number):Observable<Employee>
  {
    const emp=this.empDetails.find(x=>x.id===id);
  //  const emp1=this.empDetails.filter(x=>x.id==id);
    return of(emp);
  }
}
// Rxjs observer,Observable,subscribe