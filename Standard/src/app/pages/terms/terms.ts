import { Component, inject } from '@angular/core';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.html',
  styleUrl: '../legal-page.scss',
})
export class Terms {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;
}
