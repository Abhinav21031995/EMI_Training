import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookForm !: FormGroup;
  press:string="Save"
  api: any;
 constructor(private formbuilder:FormBuilder,@Inject(MAT_DIALOG_DATA) public editBook:any,private data:ApiService) { }

 ngOnInit(): void {

   this.bookForm=this.formbuilder.group({

     id:['',Validators.required],
     bookName:['',Validators.required],
     category:['',Validators.required],
     authorName:['',Validators.required],
     quantity:['',Validators.required]

   })

   if(this.editBook){

     this.press="Update";
     this.bookForm.controls['id'].setValue(this.editBook.id);
     this.bookForm.controls['bookName'].setValue(this.editBook.bookName);
     this.bookForm.controls['category'].setValue(this.editBook.category);
     this.bookForm.controls['authorName'].setValue(this.editBook.authorName);
     this.bookForm.controls['quantity'].setValue(this.editBook.quantity);
     
   }



   console.log(this.editBook);               
 }

 addition(){
   
   if(!this.editBook){
    //  if(this.bookForm.valid){
       this.api.postBook(this.bookForm.value)
       .subscribe({
         next:(res: any)=>{
           alert("Book added successfully!")

         
         },
         error:()=>{
           alert("Book is not added!")
         }
       })
    //  }else{
    //    this.updateBookdData()
    //  }
   }


  
   
   console.log(this.bookForm.value);
 }


 updateBookdData(){

   this.api.putBookData(this.bookForm.value,this.editBook.id).
   subscribe({
     next:(res: any)=>{
       alert("Book Updated Successfully!")
       this.bookForm.reset
       
     },
     error:()=>{
       alert("Book not updated!")
     }

     
   })

 }

}
