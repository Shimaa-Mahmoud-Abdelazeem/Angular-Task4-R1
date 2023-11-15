import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayListComponent } from './array-list.component';

describe('ArrayListComponent', () => {
  let component: ArrayListComponent;
  let fixture: ComponentFixture<ArrayListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayListComponent]
    });
    fixture = TestBed.createComponent(ArrayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
