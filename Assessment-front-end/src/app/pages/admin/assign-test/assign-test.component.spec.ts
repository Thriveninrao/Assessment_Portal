import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTestComponent } from './assign-test.component';

describe('AssignTestComponent', () => {
  let component: AssignTestComponent;
  let fixture: ComponentFixture<AssignTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignTestComponent]
    });
    fixture = TestBed.createComponent(AssignTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
