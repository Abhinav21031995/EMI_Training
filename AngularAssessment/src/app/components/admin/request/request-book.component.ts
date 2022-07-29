import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookapiService } from 'src/app/components/services/bookapi.service';

import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {
  issuedForm !: FormGroup;
  dataSource!: MatTableDataSource<any>;
  actionbtn: string = "Book Request List";

  action = 'done'
  color = 'success'



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['bookName', 'category', 'authorName'];
  // dataSources!: MatTableDataSource<any>;

  constructor(private bookapi: BookapiService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.issuedForm = this.formbuilder.group({
      // id:['',Validators.required],
      bookName: ['', Validators.required],
      category: ['', Validators.required],
      authorName: ['', Validators.required],
      // discription:['',Validators.required],
      // quantity:['',Validators.required]
    })
    this.getAllRequests();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  goBack() {
    this.router.navigateByUrl('admin')
  }



  getAllRequests() {

    this.bookapi.getRequest()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
          console.log(res)

        },
        error: (err) => {
          alert("Error while fetching the data")
         
        }
      })
  }



    //  console.log(data);
  }





