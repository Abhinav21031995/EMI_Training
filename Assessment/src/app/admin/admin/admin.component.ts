import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AddbookComponent } from '../addbook/addbook.component';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'bookName', 'category', 'authorName','quantity','action'];
  dataSource!: MatTableDataSource<any>;
  actionbtn:string="List ";
  no:any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,private router:Router,private api:ApiService) { }


  openDialog() {
    this.dialog.open(AddbookComponent, {
      width:'30%'
  
    }).afterClosed().subscribe(val=>{
    
        this.getAllBooks();
      
    });
  }

  ngOnInit(): void {
    

    
    this.getAllRequests();
    this.getAllBooks();
    

  }

// buttons getall books and request list..........................
  getAllBooks(){

    this.api.getProduct().subscribe({
   

      next:(res:any)=>{
        // this.dataSource=new MatTableDataSource(res);
        // this.dataSource.paginator=this.paginator;
        // this.dataSource.sort=this.sort
        // console.log(res.length);
   
      },
      error:(err:any)=>{
        alert("Error while fetching the data")
      }
    })

  }

  getRequestLists(){

    this.router.navigateByUrl('request')



  }

  editBook(row:any){
    this.dialog.open(AddbookComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllBooks();
      }
    })
  }

  deleteBook(id:number){
    this.api.deleteBook.subscribe({
      next:(res:any)=>{
        alert("Book deleted Successfully")
        this.getAllBooks();
      },
      error:()=>{
        alert("Error While deleting the record!")
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
  // fetching request from book.json

  getAllRequests(){

    

    this.api.getRequest()
    .subscribe({
      next:(res:any)=>{

        // this.dataSource=new MatTableDataSource(res);
        // this.dataSource.paginator=this.paginator;
        // this.dataSource.sort=this.sort
        // console.log(res)
        this.no = res.length;
      },
      error:(err:any)=>{
        alert("Error while fetching the data")
      }

    })
  }


}
