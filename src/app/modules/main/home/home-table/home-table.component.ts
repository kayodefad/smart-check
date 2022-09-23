import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HealthCheckResultDialogComponent } from '../health-check-result-dialog/health-check-result-dialog.component';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss'],
})
export class HomeTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'serial_number',
    'application',
    'servers_mapped',
    'scan_date',
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selectedApplication: number = 1;
  selectedServer: number = 1;
  selectedStatus: number = 1;

  applications = [
    { id: 1, name: 'All application' },
    { id: 2, name: 'Application name 1' },
    { id: 3, name: 'Application name 2' },
  ];

  servers = [
    { id: 1, name: 'All servers' },
    { id: 2, name: 'Server 1' },
    { id: 3, name: 'Server 2' },
  ];

  statuses = [
    { id: 1, name: 'All Status' },
    { id: 2, name: 'Healthy' },
    { id: 3, name: 'Critical' },
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    const dialogRef = this.dialog.open(HealthCheckResultDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

export interface PeriodicElement {
  serial_number: number;
  application: string;
  servers_mapped: number;
  scan_date: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    action: '',
    serial_number: 1,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 2,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'warning',
  },
  {
    action: '',
    serial_number: 3,
    application: 'Application name goes here',
    servers_mapped: 2,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 4,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 5,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 6,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 7,
    application: 'Application name goes here',
    servers_mapped: 2,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 8,
    application: 'Application name goes here',
    servers_mapped: 2,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 9,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 10,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 11,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 12,
    application: 'Application name goes here',
    servers_mapped: 2,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 13,
    application: 'Application name goes here',
    servers_mapped: 2,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 14,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 15,
    application: 'Application name goes here',
    servers_mapped: 2,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 16,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 17,
    application: 'Application name goes here',
    servers_mapped: 2,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 18,
    application: 'Application name goes here',
    servers_mapped: 2,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 19,
    application: 'Application name goes here',
    servers_mapped: 3,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
  {
    action: '',
    serial_number: 20,
    application: 'Application name goes here',
    servers_mapped: 4,
    scan_date: '11/12/20 3: 57:29 PM',
    status: 'healthy',
  },
];
