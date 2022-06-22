import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = '/assets/employee.json';

  constructor(private httpclient: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]> {
    return this.httpclient.get<IEmployee[]>(this.url);
  }
}
