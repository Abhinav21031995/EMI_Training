import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-adminoperation',
  templateUrl: './adminoperation.component.html',
  styleUrls: ['./adminoperation.component.css']
})
export class AdminoperationComponent implements OnInit {
  ApiServicea: any;

  constructor(private dialog: MatDialog,private data :ApiService) {}
ngOnInit():void{
  this.getAllProducts();
}
 opdialog(){
  this.dialog.open(DialogComponent,{
    width:'30%'
  })
 }
 getAllProducts(){
  this.ApiServicea.getProduct().
  subscribe({
    next:(res: any)=>{
      console.log(res)
    },
    error:(err: any)=>{
      alert("Error in fetching")
    }
  })
 }
 

}
