import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeHolderIteracion: string = '';

  termino: string= '';

  buscar(){
    this.onEnter.emit(this.termino);
  };

}
