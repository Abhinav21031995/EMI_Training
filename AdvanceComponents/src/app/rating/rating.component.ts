import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit,OnChanges {
@Input() rating :number;
skillrating:string;
  constructor() { }

  ngOnChanges() {
    if (this.rating === 3.5) {
      this.skillrating = 'Good';
    } else if (this.rating === 4.0) {
      this.skillrating = 'Very Good';
    } else if (this.rating === 5.0) {
      this.skillrating = 'Excellent';
    } else {
      this.skillrating = 'NO Rating Specified!';
    }
  }
  ngOnInit() {
  }

}
