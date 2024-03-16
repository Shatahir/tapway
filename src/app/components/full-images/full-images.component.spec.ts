import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullImagesComponent } from './full-images.component';

describe('FullImagesComponent', () => {
  let component: FullImagesComponent;
  let fixture: ComponentFixture<FullImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
