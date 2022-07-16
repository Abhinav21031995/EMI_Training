import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqpageComponent } from './reqpage.component';

describe('ReqpageComponent', () => {
  let component: ReqpageComponent;
  let fixture: ComponentFixture<ReqpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
