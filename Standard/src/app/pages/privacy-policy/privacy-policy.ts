import { Component, inject } from '@angular/core';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: '../legal-page.scss',
})
export class PrivacyPolicy {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;
}
