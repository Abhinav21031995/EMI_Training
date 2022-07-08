import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentlinkComponent } from './permanentlink.component';

describe('PermanentlinkComponent', () => {
  let component: PermanentlinkComponent;
  let fixture: ComponentFixture<PermanentlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
