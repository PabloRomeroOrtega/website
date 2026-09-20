import { Component, inject } from '@angular/core';
import { PlaceholderImage } from '../../shared/placeholder-image/placeholder-image';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-about',
  imports: [PlaceholderImage, SectionHeading],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;
}
