import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewphotosComponent } from './viewphotos.component';

describe('ViewphotosComponent', () => {
  let component: ViewphotosComponent;
  let fixture: ComponentFixture<ViewphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewphotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
