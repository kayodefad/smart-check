import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-status-dialog',
  templateUrl: './health-status-dialog.component.html',
  styleUrls: ['./health-status-dialog.component.scss'],
})
export class HealthStatusDialogComponent implements OnInit {
  applications = ['App Name 1', 'App Name 2', 'App Name 3', 'App Name 4'];
  servers = ['Server 1', 'Server 2', 'Server 3', 'Server 4'];

  constructor() {}

  ngOnInit(): void {}
}
