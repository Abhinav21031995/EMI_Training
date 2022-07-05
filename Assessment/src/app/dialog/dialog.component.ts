import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
   Bookform !:FormGroup;
  constructor(private formBuilder :FormBuilder,private data :ApiService) { }

  ngOnInit(): void {
    this.Bookform =this.formBuilder.group({
      Book :[''],
      Category :[''],
      Author:['']
    })
  }
  Addition(){
    if(this.Bookform.valid){
      this.data.postProduct(this.Bookform.value)
    .subscribe({
      next:(res)=>{
        alert("Book added successfully")
        this.Bookform.reset();
      },
      error:()=>{
         alert("Not Added")
    }
    })
  }
  
  }
}
