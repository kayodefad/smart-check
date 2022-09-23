import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './main.routing';
import { NavbarModule } from 'src/app/core/components/navbar/navbar.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), NavbarModule],
})
export class MainModule {}
