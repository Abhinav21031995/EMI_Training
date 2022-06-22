import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  message = 'Welcome to Data Binding Example';
  constructor() { }

  ngOnInit() {
  }

public  showData(): void {
    alert ('Event Binding Triggered!!');
    console.log('Event Binding Triggered');
  }

}
