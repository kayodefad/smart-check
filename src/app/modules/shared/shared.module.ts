import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ActionIconComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatTableModule,
    MatPaginatorModule,
    ActionIconComponent,
  ],
})
export class SharedModule {}
