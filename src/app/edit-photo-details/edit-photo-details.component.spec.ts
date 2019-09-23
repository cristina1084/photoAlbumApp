import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhotoDetailsComponent } from './edit-photo-details.component';

describe('EditPhotoDetailsComponent', () => {
  let component: EditPhotoDetailsComponent;
  let fixture: ComponentFixture<EditPhotoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhotoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhotoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
