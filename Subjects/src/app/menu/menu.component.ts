import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
exclusiveComponent:any;
  constructor(private designService:DesignService) { }

  ngOnInit(): void {
    this.designService.exclusive.subscribe(res=>{
      this.exclusiveComponent=res;
    })
  }

}
