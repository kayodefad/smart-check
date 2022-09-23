import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.scss'],
})
export class ServerTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'serial_number',
    'server_name',
    'ip_address',
    'cpu',
    'memory',
    'storage',
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  serial_number: number;
  server_name: string;
  ip_address: string;
  cpu: number;
  memory: number;
  storage: number;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    action: '',
    serial_number: 1,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 2,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 3,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 4,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 5,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 6,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 7,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 8,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 9,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 10,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 11,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 12,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 13,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 14,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 15,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 16,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 17,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 18,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 19,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
  {
    action: '',
    serial_number: 20,
    server_name: 'Server name goes here',
    ip_address: 'IP Address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
  },
];
