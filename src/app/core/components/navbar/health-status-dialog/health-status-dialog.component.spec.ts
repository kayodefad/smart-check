import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStatusDialogComponent } from './health-status-dialog.component';

describe('HealthStatusDialogComponent', () => {
  let component: HealthStatusDialogComponent;
  let fixture: ComponentFixture<HealthStatusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthStatusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
