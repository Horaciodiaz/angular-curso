import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {
  
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject;

  termino: string = '';

  ngOnInit(){
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(
        valor => {
          this.onDebounce.emit( valor );
        }
    )
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPrecionada(){
    this.debouncer.next( this.termino );
  }
}
