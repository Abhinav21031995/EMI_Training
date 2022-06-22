import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  user2Subscription:Subscription | undefined;
  User1List=[
    'Angular',
    'C#'
  ]

  User2List:any=[];
  subscribe2user=false;
  constructor(private designService:DesignService) { 
    this.designService.videoEmit.subscribe(res=>{
      this.User1List.push(res);
    })
  }

  ngOnInit(): void {
  }
  onVideoAdd(video:any)
  {
    this.designService.videoEmit.next(video);
  }

  user2subscribe()
  {
    if(this.subscribe2user)
    {
      this.user2Subscription?.unsubscribe();
    }

    else
    {
      this.user2Subscription=this.designService.videoEmit.subscribe(res1=>this.User2List.push(res1));
    }
    this.subscribe2user=!this.subscribe2user
  }

}
