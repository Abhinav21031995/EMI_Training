import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() inputmessage: string;
@Output() myoutput: EventEmitter<string> = new EventEmitter<string>();
outputvariable ='Hi I know your are my Parent!!';
  constructor() { }

  ngOnInit() {

    console.log(this.inputmessage);
  }
public senddata()
{
  this.myoutput.emit(this.outputvariable);
}
}
