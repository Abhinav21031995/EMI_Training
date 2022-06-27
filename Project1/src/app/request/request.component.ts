import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  selected:any = 'option1' ;
  
    value:any=
      `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not ` 
 constructor() { }

  ngOnInit(): void {
  }

} 
