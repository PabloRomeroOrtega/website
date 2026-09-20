import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-location',
  imports: [MatIconModule, SectionHeading],
  templateUrl: './location.html',
  styleUrl: './location.scss',
})
export class Location {
  private readonly siteConfigService = inject(SiteConfigService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly config = this.siteConfigService.config;

  readonly directionsUrl = this.config.contact.address
    ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(this.config.contact.address)
    : '';

  readonly mapEmbedUrl: SafeResourceUrl | null = this.config.contact.address
    ? this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps?q=' + encodeURIComponent(this.config.contact.address) + '&output=embed',
      )
    : null;

  get whatsappUrl(): string {
    const digits = this.config.contact.whatsapp.replace(/\D/g, '');
    return digits ? `https://wa.me/${digits}` : '';
  }
}
