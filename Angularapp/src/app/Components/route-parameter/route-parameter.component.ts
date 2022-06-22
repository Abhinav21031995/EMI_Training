import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-parameter',
  templateUrl: './route-parameter.component.html',
  styleUrls: ['./route-parameter.component.scss']
})
export class RouteParameterComponent implements OnInit {
  ID: number;
  Name: string;
  Location: string;

  constructor(private activate: ActivatedRoute, private router: Router) { }

  ngOnInit() {
 // this.activate.params.subscribe((p) => {
    //   this.ID = +p.id;

  //   this.activate.paramMap.subscribe((p: ParamMap) => {
  // this.ID = +p.get('id');
  //   });

  this.ID = +this.activate.snapshot.paramMap.get('id');

  }

  public QueryParam() {
    this.router.navigate(['emp'], {queryParams: {ID: 23, Name: 'Mayura', Location: 'Bangalore'}});
  }

public redirect():void {

  this.router.navigate(['emp']);


}
}
