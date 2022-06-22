import { Component, Input, OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() emp:any;
@Input() counterNewValue : number=0;
currentValue:SimpleChanges | undefined;
previousValue:SimpleChanges | undefined;
firstChange:boolean | undefined

  constructor() { 

    console.log("Child => Constructor!!!");
  }

  ngOnInit(): void {
    console.log("2.ngOnInit of Child Component");
  }

  ngDoCheck(){
    console.log("1.ngDoCheck of Child Component");
  }
  ngOnchange(changes:SimpleChanges){
   this.currentValue=changes['counterNewValue'].currentValue;
   console.log(this.counterNewValue);
   this.previousValue=changes['counterNewValue'].previousValue;
   console.log(this.previousValue);
   this.firstChange=changes['firstChange'].firstChange;
   console.log(this.firstChange);

  }
  ngafterContentChecked()
  {
    console.log('4.ngAfterContentChecked=> Child Component');
  }

  ngAfterContentInit()
  {
    console.log('3.ngAfterContentInit=>After ContentInit');
  }
  ngAfterViewInit()
  {
    console.log('5. get executed after ngAfterContentChecked=> AfterViewInit');
  
  }
  ngAfterViewChecked()
  {
    console.log('6. get executed after ngAfterViewInit=> ngAfterViewChecked');
  
  }
  
  ngOnDestroy():void{
    console.log("Child component Destroyed!!");
  }
}
