import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PlaceholderImage } from '../../shared/placeholder-image/placeholder-image';
import { ScrollService } from '../../core/scroll.service';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, PlaceholderImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly siteConfigService = inject(SiteConfigService);
  private readonly scrollService = inject(ScrollService);

  readonly config = this.siteConfigService.config;

  goTo(sectionId: string): void {
    this.scrollService.goToSection(sectionId);
  }
}
