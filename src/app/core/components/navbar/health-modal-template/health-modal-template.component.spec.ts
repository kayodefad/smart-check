import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthModalTemplateComponent } from './health-modal-template.component';

describe('HealthModalTemplateComponent', () => {
  let component: HealthModalTemplateComponent;
  let fixture: ComponentFixture<HealthModalTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthModalTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthModalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
