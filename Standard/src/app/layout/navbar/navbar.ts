import { Component, HostListener, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollService } from '../../core/scroll.service';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, MatMenuModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly siteConfigService = inject(SiteConfigService);
  private readonly scrollService = inject(ScrollService);

  readonly config = this.siteConfigService.config;
  readonly isScrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }

  goTo(sectionId: string): void {
    this.scrollService.goToSection(sectionId);
  }
}
