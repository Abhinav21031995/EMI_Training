import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
empName:string | undefined;
  constructor(private design:DesignService) {
    this.design.empName.subscribe(res=>{
      this.empName=res;
    })
   }

  ngOnInit(): void {
  }

  OnChange(empname:any)
  {
    this.design.empName.next(empname.value);
  }
}
