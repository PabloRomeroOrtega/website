import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Scrolls to a section by id, offsetting for the fixed navbar height.
 * When called from a route other than the home page, navigates home first.
 */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly router = inject(Router);
  private readonly navbarOffset = 72;

  goToSection(sectionId: string): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollToSection(sectionId);
      return;
    }

    this.router.navigateByUrl('/').then(() => {
      setTimeout(() => this.scrollToSection(sectionId), 0);
    });
  }

  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (!el) {
      return;
    }
    const top = el.getBoundingClientRect().top + window.scrollY - this.navbarOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
