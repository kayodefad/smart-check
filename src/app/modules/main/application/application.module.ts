import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './application.routes';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationTableComponent } from './application-table/application-table.component';
import { AddApplicationDialogComponent } from './add-application-dialog/add-application-dialog.component';

@NgModule({
  declarations: [ApplicationComponent, ApplicationTableComponent, AddApplicationDialogComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class ApplicationModule {}
