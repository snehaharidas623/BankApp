import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {
  @Input() item: String | undefined

  //event creation
  //By using EventEmitter class
  @Output() onCancel = new EventEmitter()
  @Output() onDelete = new EventEmitter()
  constructor() {

  }
  cancel() {
    this.onCancel.emit()

  }
  delete() {
    this.onDelete.emit(this.item)
  }
}
