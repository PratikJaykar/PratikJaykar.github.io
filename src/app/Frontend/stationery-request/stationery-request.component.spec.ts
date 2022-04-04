import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeryRequestComponent } from './stationery-request.component';

describe('StationeryRequestComponent', () => {
  let component: StationeryRequestComponent;
  let fixture: ComponentFixture<StationeryRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationeryRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationeryRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
