import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  } 
  history(){
    this.router.navigateByUrl("history");
  }
  myrequest(){
    this.router.navigateByUrl("myrequest");
  }

}
