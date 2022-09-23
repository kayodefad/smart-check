import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './server.routes';
import { ServerComponent } from './server.component';

@NgModule({
  declarations: [ServerComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class ServerModule {}
