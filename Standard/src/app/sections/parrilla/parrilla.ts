import { Component, inject } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-parrilla',
  imports: [SectionHeading],
  templateUrl: './parrilla.html',
  styleUrl: './parrilla.scss',
})
export class Parrilla {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;
}
