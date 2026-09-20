import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { SiteConfigService } from '../../core/site-config.service';

/**
 * Reserva por llamada o por WhatsApp. No hay servidor: el formulario compone un
 * mensaje y abre WhatsApp, de modo que el restaurante recibe cada reserva por escrito.
 */
@Component({
  selector: 'app-reservation',
  imports: [ReactiveFormsModule, MatIconModule, SectionHeading],
  templateUrl: './reservation.html',
  styleUrl: './reservation.scss',
})
export class Reservation {
  private readonly siteConfigService = inject(SiteConfigService);
  private readonly formBuilder = inject(FormBuilder);

  readonly config = this.siteConfigService.config;
  readonly minDate = this.toIsoDate(new Date());

  readonly phone = this.config.contact.phone;
  readonly whatsappDigits = this.config.contact.whatsapp.replace(/\D/g, '');
  readonly unavailable = signal(false);

  readonly form = this.formBuilder.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    guests: [2, [Validators.required]],
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
    notes: [''],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (!this.whatsappDigits) {
      this.unavailable.set(true);
      return;
    }
    const v = this.form.getRawValue();
    const lines = [
      this.config.reservation.messageIntro,
      `Nombre: ${v.fullName.trim()}`,
      `Personas: ${v.guests}`,
      `Fecha: ${this.formatDate(v.date)}`,
      `Hora: ${v.time}`,
    ];
    if (v.notes.trim()) {
      lines.push(`Notas: ${v.notes.trim()}`);
    }
    const url = `https://wa.me/${this.whatsappDigits}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  }

  private formatDate(iso: string): string {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  }

  private toIsoDate(d: Date): string {
    const p = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }
}
