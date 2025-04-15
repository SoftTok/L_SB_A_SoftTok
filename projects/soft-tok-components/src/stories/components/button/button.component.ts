import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'soft-tok-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
  type="button"
  (click)="onClick.emit($event)"
  [ngClass]="classes"
  [ngStyle]="{ 'background-color': backgroundColor }"
>
  {{ label }}
</button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /** Es este el botón principal de acción en la página? */
  @Input()
  primary = false;

  /** Qué color de fondo usar */
  @Input()
  backgroundColor?: string;

  /** Qué tamaño debe tener el botón? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Contenido del botón
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Manejador de clic opcional */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'soft-tok-button--primary' : 'soft-tok-button--secondary';

    return ['soft-tok-button', `soft-tok-button--${this.size}`, mode];
  }
}
