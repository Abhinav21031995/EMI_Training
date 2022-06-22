import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating:number | undefined;
  skillrating:string="";
  constructor() { }

  ngOnChanges() {
    if (this.rating === 1.0) {
      this.skillrating = 'Very Poor';
    }else if (this.rating === 1.5) {
      this.skillrating = 'Poor';
    } else if (this.rating === 2.0) {
      this.skillrating = 'Fine';
    }else if (this.rating === 2.5) {
      this.skillrating = 'Good';
    } else if (this.rating === 3.0) {
      this.skillrating = 'Very Good';
    }else if (this.rating === 3.5) {
      this.skillrating = 'Better';
    } else if (this.rating === 4.0) {
      this.skillrating = 'Very Better';
    } else if (this.rating === 4.5) {
      this.skillrating = 'Best';
    } else if (this.rating === 5.0) {
      this.skillrating = 'Excellent';
    } else {
      this.skillrating = 'NO Rating Specified!';
    }
  }

  ngOnInit(): void {
  }


}
