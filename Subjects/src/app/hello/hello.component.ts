import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  empName:string | undefined;
  constructor(private service:DesignService) 
  { }

  ngOnInit(): void {
    this.service.empName.subscribe(response=>{
      this.empName=response
    });
 
  }
  OnChange(empname:any)
  {
    this.service.empName.next(empname.value);
  }
}
