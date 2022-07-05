import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoperationComponent } from './adminoperation.component';

describe('AdminoperationComponent', () => {
  let component: AdminoperationComponent;
  let fixture: ComponentFixture<AdminoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminoperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
