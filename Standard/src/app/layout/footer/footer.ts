import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../core/scroll.service';
import { SiteConfigService } from '../../core/site-config.service';
import { Sun } from '../../shared/sun/sun';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, RouterLink, Sun],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly siteConfigService = inject(SiteConfigService);
  private readonly scrollService = inject(ScrollService);

  readonly config = this.siteConfigService.config;
  readonly currentYear = new Date().getFullYear();

  goTo(sectionId: string): void {
    this.scrollService.goToSection(sectionId);
  }
}
