import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckResultDialogComponent } from './health-check-result-dialog.component';

describe('HealthCheckResultDialogComponent', () => {
  let component: HealthCheckResultDialogComponent;
  let fixture: ComponentFixture<HealthCheckResultDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCheckResultDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCheckResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
