import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestapiComponent } from './testapi.component';

describe('TestapiComponent', () => {
  let component: TestapiComponent;
  let fixture: ComponentFixture<TestapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestapiComponent]
    });
    fixture = TestBed.createComponent(TestapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});