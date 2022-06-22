import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
employee={
  id:34,
  name:'Mayura',
  location:'Bangalore'
}
showChild=true;
counter =0;
  constructor() {
    console.log("constructor of Parent Component!!");
   }

  ngOnInit(): void {
    console.log("NgOnInit executed!!");
  }
  hideShowChild()
  {
    this.showChild=!this.showChild;
  }

  public increment():void
  {
    this.counter++;
    console.log(this.counter);
  }

  public decrement():void
  {
    this.counter++;
    console.log(this.counter);
  }

  public updateDetails()
  {
    this.employee={
      id:45,
      name:'Ram',
      location:'Pune'
    }
  }

  // ngAfterViewInit()
  // {
  //   console.log("Parent => ngAfterViewInit");
  // }

  // ngOnchanges()
  // {
  //   console.log('Parent=> ngOnChanges');
  // }

  // ngDoCheck()
  // {
  //   console.log("Parent=>NgDoCheck ");
  // }

  // ngAfterContentInit()
  // {
  //   console.log('PArent=>ngAfterContentInit');
  // }
  // ngOnDestory()
  // {
  //   console.log('PArent =>ngOnDestroy');
  // }

  // ngAfterViewChecked()
  // {
  //   console.log('PArent=>ngAfterViewChecked');
  // }
  // ngafterContentChecked()
  // {
  //  console.log('Parent=>ngAfterContentChecked!!');
  // }
}
