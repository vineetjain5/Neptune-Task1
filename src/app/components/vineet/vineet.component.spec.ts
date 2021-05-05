import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VineetComponent } from './vineet.component';

describe('VineetComponent', () => {
  let component: VineetComponent;
  let fixture: ComponentFixture<VineetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VineetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VineetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
