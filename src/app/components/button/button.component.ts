import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() text!: string;

  handleClick() {
    this.onClick.emit();
  }
}
