import { Component, OnInit } from '@angular/core';
import { ListApiService } from 'src/app/services/list-api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['Reason', 'Description', 'Amount', 'Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private list :ListApiService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }

  deleteProduct(id:number){

    this.list.deleteProduct(id).subscribe({
      next:(data:any)=>{
        alert("Deleted Suceessfully")
        
       
      },error:()=>{
        alert("Not deleted")
      }

    
    })
    this.getAllProducts();

  }
getAllProducts(){
     this.list.getProduct(data)
    .subscribe({
      next:(res: any)=> {
      this.dataSource= new MatTableDataSource(res)
      this.dataSource.paginator= this.paginator
      },error:()=>{
        alert("Error while adding")
      }
    
      
})








  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}



 
}

function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}
function applyFilter(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly AT_TARGET: number; readonly BUBBLING_PHASE: number; readonly CAPTURING_PHASE: number; readonly NONE: number; }) {
  throw new Error('Function not implemented.');
}

function deleteProduct(Amount: any, Number: NumberConstructor) {
  throw new Error('Function not implemented.');
}

function Amount(Amount: any, Number: NumberConstructor) {
  throw new Error('Function not implemented.');
}

