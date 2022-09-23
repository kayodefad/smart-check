import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-modal-template',
  templateUrl: './health-modal-template.component.html',
  styleUrls: ['./health-modal-template.component.scss'],
})
export class HealthModalTemplateComponent implements OnInit {
  @Input() title!: string;
  @Input() data!: any[];
  constructor() {}

  ngOnInit(): void {}
}
