import { Component, input } from '@angular/core';

/** Sol de Mayo simplificado, tomado del cartel del local. Decorativo. */
@Component({
  selector: 'app-sun',
  template: `
    <svg viewBox="0 0 100 100" [attr.width]="size()" [attr.height]="size()" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        @for (i of rays; track i) {
          <path d="M50 4 L55 26 L45 26 Z" [attr.transform]="'rotate(' + i * 22.5 + ' 50 50)'" />
        }
        <circle cx="50" cy="50" r="19" />
      </g>
      <g fill="none" stroke="var(--ua-ink)" stroke-width="2.5" stroke-linecap="round">
        <path d="M43 52 Q50 58 57 52" />
        <circle cx="44" cy="46" r="0.6" />
        <circle cx="56" cy="46" r="0.6" />
      </g>
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      color: var(--ua-sun);
    }
  `,
})
export class Sun {
  readonly size = input(40);
  protected readonly rays = Array.from({ length: 16 }, (_, i) => i);
}
