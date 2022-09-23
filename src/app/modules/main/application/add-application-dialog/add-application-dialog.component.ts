import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-application-dialog',
  templateUrl: './add-application-dialog.component.html',
  styleUrls: ['./add-application-dialog.component.scss'],
})
export class AddApplicationDialogComponent implements OnInit {
  servers = ['Server 1', 'Server 2', 'Server 3', 'Server 4'];
  constructor() {}

  ngOnInit(): void {}
}
