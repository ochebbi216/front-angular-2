import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestapiCComponent } from './testapi-c.component';

describe('TestapiCComponent', () => {
  let component: TestapiCComponent;
  let fixture: ComponentFixture<TestapiCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestapiCComponent]
    });
    fixture = TestBed.createComponent(TestapiCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
