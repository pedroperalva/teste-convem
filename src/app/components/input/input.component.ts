import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() onInput: EventEmitter<any> = new EventEmitter();
  handleInput(event: any) {
    this.onInput.emit(event.target.value);
  }
}
