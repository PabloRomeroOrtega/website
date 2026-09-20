import { Component, inject } from '@angular/core';
import { ScrollService } from '../../core/scroll.service';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-featured',
  imports: [SectionHeading],
  templateUrl: './featured.html',
  styleUrl: './featured.scss',
})
export class Featured {
  private readonly siteConfigService = inject(SiteConfigService);
  private readonly scrollService = inject(ScrollService);
  readonly config = this.siteConfigService.config;

  goTo(sectionId: string): void {
    this.scrollService.goToSection(sectionId);
  }
}
