import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '@app/features/lists/tables/models/tables-column.model';

@Component({
  selector: 'app-table-time-type',
  templateUrl: './table-time-type.component.html',
  styleUrls: ['./table-time-type.component.scss']
})
export class TableTimeTypeComponent implements OnInit {
  @Input('column') column!: TableColumn;
  @Output() event = new EventEmitter<string>();
  @Input('data') data!: any;

  constructor() { }

  ngOnInit(): void {
  }

  changed(element: HTMLInputElement) {
    const value = element.value;
    if (value) this.event.emit(value);
  }
}
