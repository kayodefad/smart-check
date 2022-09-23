import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddApplicationDialogComponent } from '../add-application-dialog/add-application-dialog.component';

@Component({
  selector: 'app-application-table',
  templateUrl: './application-table.component.html',
  styleUrls: ['./application-table.component.scss'],
})
export class ApplicationTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'serial_number',
    'app_name',
    'app_type',
    'app_dcsc',
    'app_port',
    'end_point',
    'host',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selectedStatus: number = 1;

  statuses = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Active' },
    { id: 3, name: 'Inactive' },
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddApplicationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

export interface PeriodicElement {
  serial_number: number;
  app_name: string;
  app_type: string;
  app_dcsc: string;
  app_port: string;
  end_point: string;
  host: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    action: '',
    serial_number: 1,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 2,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 3,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 4,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 5,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 6,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 7,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 8,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 9,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 10,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 11,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 12,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 13,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 14,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 15,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 16,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 17,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 18,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 19,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
  {
    action: '',
    serial_number: 20,
    app_name: 'Application name goes here',
    app_type: 'Application type',
    app_dcsc: 'Application type',
    app_port: 'Application port',
    end_point: 'End point',
    host: '10.1.101.53',
  },
];
