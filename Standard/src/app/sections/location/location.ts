import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PlaceholderImage } from '../../shared/placeholder-image/placeholder-image';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-location',
  imports: [MatButtonModule, MatIconModule, PlaceholderImage, SectionHeading],
  templateUrl: './location.html',
  styleUrl: './location.scss',
})
export class Location {
  private readonly siteConfigService = inject(SiteConfigService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly config = this.siteConfigService.config;

  readonly directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(this.config.contact.address);

  readonly mapEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps?q=' + encodeURIComponent(this.config.contact.address) + '&output=embed',
  );
}
