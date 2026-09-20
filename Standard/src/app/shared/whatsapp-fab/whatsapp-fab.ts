import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SiteConfigService } from '../../core/site-config.service';

/** Botón flotante de WhatsApp. Solo aparece si hay un número configurado. */
@Component({
  selector: 'app-whatsapp-fab',
  imports: [MatIconModule],
  templateUrl: './whatsapp-fab.html',
  styleUrl: './whatsapp-fab.scss',
})
export class WhatsappFab {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;

  get whatsappLink(): string | undefined {
    const digits = this.config.contact.whatsapp.replace(/\D/g, '');
    return digits ? `https://wa.me/${digits}` : undefined;
  }
}
