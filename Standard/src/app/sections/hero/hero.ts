import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ScrollService } from '../../core/scroll.service';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-hero',
  imports: [MatIconModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly siteConfigService = inject(SiteConfigService);
  private readonly scrollService = inject(ScrollService);

  readonly config = this.siteConfigService.config;

  goTo(sectionId: string): void {
    this.scrollService.goToSection(sectionId);
  }
}
