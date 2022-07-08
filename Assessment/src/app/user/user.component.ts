import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  onClick(){
    this.toastr.warning('Dont exceed limit ','only 3 books allowed');
  }
  requestForm !: FormGroup;

  displayedColumns: string[] = ['id', 'bookName', 'category', 'authorName','quantity','action'];
  dataSource!: MatTableDataSource<any>;
  no:any;
  count:number=0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private formbuilder:FormBuilder,private toastr: ToastrService,private api:ApiService) { }

  ngOnInit(): void {

    this.requestForm=this.formbuilder.group({

      id:['',Validators.required],
      bookName:['',Validators.required],
      category:['',Validators.required],
      authorName:['',Validators.required],
      discription:['',Validators.required],
      quantity:['',Validators.required]
    })

    this.getAllBooks();
   
  }


  getAllBooks(){
    this.api.getProduct({
      next:(res:any)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(err:any)=>{
        alert("Error while fetching the data")
      }
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  // all about  user request operation .......................................
  sendRequest(no:any){
    if(no>3){
     alert("You cross the limit");
    }
    else{
     if(this.requestForm.valid){
       this.api.requestProduct(this.requestForm.value)
       .subscribe({
         next:(res:any)=>{
           alert("send  successfully!!")
         }
       })
     }
    }
   }

  requestProduct(data:any){
    this.requestForm.controls['id'].setValue(data.id);
    this.requestForm.controls['bookName'].setValue(data.bookName);
    this.requestForm.controls['category'].setValue(data.category);
    this.requestForm.controls['authorName'].setValue(data.authorName);
   
    this.requestForm.controls['quantity'].setValue(data.quantity);
    this.sendRequest(this.count);
    this.count++;
    console.log(this.count);
    }


   
    getAllRequests(){
      this.api.getRequest()
      .subscribe({
        next:(res:any)=>{
          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort
          this.no = res.length;
        },
        error:(err:any)=>{
          alert("Error!!!")
        }
      })
  }

}



  // ngOnInit(): void {
  //   this.toastr.success('Dont exceed books than 3');
  // }


