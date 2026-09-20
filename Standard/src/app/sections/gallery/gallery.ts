import { Component, computed, inject, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { PlaceholderImage } from '../../shared/placeholder-image/placeholder-image';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SiteConfigService } from '../../core/site-config.service';

@Component({
  selector: 'app-gallery',
  imports: [MatChipsModule, PlaceholderImage, SectionHeading],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  private readonly siteConfigService = inject(SiteConfigService);
  readonly config = this.siteConfigService.config;

  readonly categories = computed(() => [
    this.config.gallery.categoryAllLabel,
    ...new Set(this.config.gallery.images.map((image) => image.category)),
  ]);

  readonly selectedCategory = signal(this.config.gallery.categoryAllLabel);

  readonly filteredImages = computed(() => {
    const category = this.selectedCategory();
    if (category === this.config.gallery.categoryAllLabel) {
      return this.config.gallery.images;
    }
    return this.config.gallery.images.filter((image) => image.category === category);
  });

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
