import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './server.routes';
import { ServerComponent } from './server.component';
import { ServerTableComponent } from './server-table/server-table.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ServerComponent, ServerTableComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class ServerModule {}
