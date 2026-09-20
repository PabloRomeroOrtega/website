import { Component, inject } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-gallery',
  imports: [SectionHeading],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;
}
