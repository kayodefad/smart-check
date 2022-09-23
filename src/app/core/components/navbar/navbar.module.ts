import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HealthStatusDialogComponent } from './health-status-dialog/health-status-dialog.component';
import { HealthModalTemplateComponent } from './health-modal-template/health-modal-template.component';

@NgModule({
  declarations: [NavbarComponent, HealthStatusDialogComponent, HealthModalTemplateComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
