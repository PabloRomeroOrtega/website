import { Component, computed, inject, signal } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-offerings',
  imports: [SectionHeading],
  templateUrl: './offerings.html',
  styleUrl: './offerings.scss',
})
export class Offerings {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;

  /** `null` = toda la carta. */
  readonly selectedId = signal<string | null>(null);

  readonly visibleCategories = computed(() => {
    const id = this.selectedId();
    const all = this.config.menu.categories;
    return id ? all.filter((c) => c.id === id) : all;
  });

  select(id: string | null): void {
    this.selectedId.set(id);
  }
}
