import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SiteConfigService } from '../../core/site-config.service';

/** Floating quick-contact button linking to the business WhatsApp number. */
@Component({
  selector: 'app-whatsapp-fab',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './whatsapp-fab.html',
  styleUrl: './whatsapp-fab.scss',
})
export class WhatsappFab {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;

  get whatsappLink(): string | undefined {
    return this.config.contact.socials.find((s) => s.label === 'WhatsApp')?.url;
  }
}
