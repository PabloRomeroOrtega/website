import { Component, computed, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { PlaceholderImage } from '../../shared/placeholder-image/placeholder-image';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-offerings',
  imports: [MatCardModule, MatChipsModule, PlaceholderImage, SectionHeading],
  templateUrl: './offerings.html',
  styleUrl: './offerings.scss',
})
export class Offerings {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;

  readonly categories = computed(() => [
    this.config.offerings.categoryAllLabel,
    ...new Set(this.config.offerings.items.map((item) => item.category)),
  ]);

  readonly selectedCategory = signal(this.config.offerings.categoryAllLabel);

  readonly filteredItems = computed(() => {
    const category = this.selectedCategory();
    if (category === this.config.offerings.categoryAllLabel) {
      return this.config.offerings.items;
    }
    return this.config.offerings.items.filter((item) => item.category === category);
  });

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
