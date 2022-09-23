import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ActionIconComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatTableModule,
    MatPaginatorModule,
    ActionIconComponent,
    MatDialogModule
  ],
})
export class SharedModule {}
