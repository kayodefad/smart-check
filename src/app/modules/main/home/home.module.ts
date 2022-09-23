import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './home.routes';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeTableComponent } from './home-table/home-table.component';

@NgModule({
  declarations: [HomeComponent, CardComponent, HomeTableComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
