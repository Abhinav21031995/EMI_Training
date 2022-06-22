import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-subject',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private service:DesignService) { }

  ngOnInit(): void {
    this.service.exclusive.next(true);
  }
ngOnDestroy():void
{
  this.service.exclusive.next(false);
}
// }
}
