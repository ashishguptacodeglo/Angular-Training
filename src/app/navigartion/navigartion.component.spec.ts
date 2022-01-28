import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigartionComponent } from './navigartion.component';

describe('NavigartionComponent', () => {
  let component: NavigartionComponent;
  let fixture: ComponentFixture<NavigartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigartionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
