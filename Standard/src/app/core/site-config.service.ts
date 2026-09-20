import { Injectable } from '@angular/core';
import { SITE_CONFIG } from './site-config';
import { SiteConfig } from './site-config.model';

/**
 * Single access point for all business-specific content.
 * To re-skin this template for a new client, edit `site-config.ts` only.
 * Every component reads through this service.
 */
@Injectable({ providedIn: 'root' })
export class SiteConfigService {
  readonly config: SiteConfig = SITE_CONFIG;
}
