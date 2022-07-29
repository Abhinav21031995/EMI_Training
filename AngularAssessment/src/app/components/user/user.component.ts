import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BookapiService } from 'src/app/components/services/bookapi.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from 'src/app/components/services/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { MyBooksComponent } from './my-books/my-books.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  requestForm !: FormGroup;
  no: any

  displayedColumns: string[] = ['id', 'bookName', 'category', 'authorName', 'discription', 'quantity','action'];
  dataSource!: MatTableDataSource<any>;

  count: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public dialog: MatDialog, private formbuilder: FormBuilder, private toast: NgToastService, private bookapi: BookapiService, private requestapi: UserServiceService, private getMyBooK: UserServiceService) { }

  ngOnInit(): void {
    this.requestForm = this.formbuilder.group({
      id: ['', Validators.required],
      bookName: ['', Validators.required],
      category: ['', Validators.required],
      authorName: ['', Validators.required],
      discription: ['', Validators.required],
      quantity: ['', Validators.required]
    })
    this.getAllBooks();
    this.issuedBook();
  }


  getAllBooks() {
    this.bookapi.getBook().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
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

  myBooks() {
    this.dialog.open(MyBooksComponent, {
      width: "50%"
    });
  }


  // all about  user request operation .......................................
  sendRequest(no: any) {
    if (no > 2) {
      alert("You cross the limit");
      
    }
    else {
      Swal.fire({
        title: ' Request Book?',
        showCancelButton: true,
        confirmButtonText: 'Request',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {
          if (this.requestForm.valid) {
            // console.log(this.requestForm.value)
            this.requestapi.requestBook(this.requestForm.value)
              .subscribe({
                next: (res) => {
                 alert("Success")
                }
              })
          }
        } else {
         alert("request cancel successfully")
        }
      }
      )
    }
  }


  // **************************************************************************************

  requestBook(data: any) {

    this.requestForm.controls['id'].setValue(data.id);
    this.requestForm.controls['bookName'].setValue(data.bookName);
    this.requestForm.controls['category'].setValue(data.category);
    this.requestForm.controls['authorName'].setValue(data.authorName);
    this.requestForm.controls['discription'].setValue(data.discription);
    this.requestForm.controls['quantity'].setValue(data.quantity);
    this.sendRequest(this.count);
    this.count++;
    console.log(this.count);
  }



  getAllRequests() {
    this.bookapi.getRequest()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
          this.no = res.length;
        },
        error: (err) => {
          alert("Error while fetching the data")
        }
      })
  }

  issuedBook() {
    this.getMyBooK.getIssuedBook().subscribe({
      next: (res) => {
        this.no = res.length
      },
      error: (err) => {
        // alert("Error while fetching the data");
        this.toast.error({ detail: "Error While fetching the data!", summary: "something went wrong", duration: 5000 });
      }
    })
  }
}


