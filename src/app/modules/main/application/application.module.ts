import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './application.routes';

@NgModule({
  declarations: [ApplicationComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class ApplicationModule {}
