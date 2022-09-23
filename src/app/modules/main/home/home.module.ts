import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './home.routes';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './table/table.component';
import { HomeTableComponent } from './home-table/home-table.component';

@NgModule({
  declarations: [HomeComponent, CardComponent, TableComponent, HomeTableComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
