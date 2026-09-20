import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * Stand-in for a photo that has not been supplied yet. Used wherever a
 * section has an optional image field that is left unset in site-config.ts.
 * Swap it out automatically once a real URL is added to the config; no
 * template changes are needed.
 */
@Component({
  selector: 'app-placeholder-image',
  imports: [MatIconModule],
  templateUrl: './placeholder-image.html',
  styleUrl: './placeholder-image.scss',
})
export class PlaceholderImage {
  readonly label = input<string>('');
}
