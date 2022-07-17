import { APP_ID, Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormGroup, FormControl,Validators, FormBuilder} from '@angular/forms';
import { ListApiService } from 'src/app/services/list-api.service';


@Component({
  selector: 'app-reqpage',
  templateUrl: './reqpage.component.html',
  styleUrls: ['./reqpage.component.css']
})
export class ReqpageComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
   
   DetailForm !:FormGroup
   constructor(private formbuilder:FormBuilder, private list :ListApiService) { }

  ngOnInit(): void {
    this.DetailForm=this.formbuilder.group({
      Reason: ['',Validators.required],
      Description: ['',Validators.required],
      Amount: ['',Validators.required],
    })
  }
  Submit(){
   if(this.DetailForm.valid){
    this.list.postProduct(this.DetailForm.value)
    .subscribe({
      next:(res)=> {
        alert("Prdoct added sucessfully")
        this.DetailForm.reset();
      },error:()=>{
        alert("Error while adding")
      }
    })
   }
  }
  Reset(){}
}
