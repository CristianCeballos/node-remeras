import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemeraComponent } from './remera.component';

describe('RemeraComponent', () => {
  let component: RemeraComponent;
  let fixture: ComponentFixture<RemeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
