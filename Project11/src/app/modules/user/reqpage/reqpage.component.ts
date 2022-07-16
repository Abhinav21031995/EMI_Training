import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reqpage',
  templateUrl: './reqpage.component.html',
  styleUrls: ['./reqpage.component.css']
})
export class ReqpageComponent implements OnInit { selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

nativeSelectFormControl = new FormControl('valid', [
  Validators.required,
  Validators.pattern('valid'),
]);



  constructor() { }

  ngOnInit(): void {
  }

}
