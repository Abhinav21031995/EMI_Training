import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrequestComponent } from './myrequest.component';

describe('MyrequestComponent', () => {
  let component: MyrequestComponent;
  let fixture: ComponentFixture<MyrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
