import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectDetailsComponent } from './my-project-details.component';

describe('MyProjectDetailsComponent', () => {
  let component: MyProjectDetailsComponent;
  let fixture: ComponentFixture<MyProjectDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProjectDetailsComponent]
    });
    fixture = TestBed.createComponent(MyProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
