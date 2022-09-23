import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HealthStatusDialogComponent } from './health-status-dialog/health-status-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(HealthStatusDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
