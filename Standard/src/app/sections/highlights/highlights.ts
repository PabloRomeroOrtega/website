import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-highlights',
  imports: [MatIconModule],
  templateUrl: './highlights.html',
  styleUrl: './highlights.scss',
})
export class Highlights {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;
}
