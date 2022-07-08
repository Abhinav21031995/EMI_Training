import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponentsComponent } from './details-components.component';

describe('DetailsComponentsComponent', () => {
  let component: DetailsComponentsComponent;
  let fixture: ComponentFixture<DetailsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
