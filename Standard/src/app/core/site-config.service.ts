import { Injectable } from '@angular/core';
import { SITE_CONFIG } from './site-config';
import { SiteConfig } from './site-config.model';

/**
 * Single access point for all business-specific content.
 * Edit `site-config.ts` to change texts, prices or contact data.
 */
@Injectable({ providedIn: 'root' })
export class SiteConfigService {
  readonly config: SiteConfig = SITE_CONFIG;
}
