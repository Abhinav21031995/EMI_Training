import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListEmployeeComponent implements OnInit {
@Input() employee=[];
  constructor() { }

  ngOnInit() {
  }
  
}
