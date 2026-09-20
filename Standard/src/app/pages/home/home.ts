import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Highlights } from '../../sections/highlights/highlights';
import { Offerings } from '../../sections/offerings/offerings';
import { About } from '../../sections/about/about';
import { Gallery } from '../../sections/gallery/gallery';
import { Location } from '../../sections/location/location';
import { Reservation } from '../../sections/reservation/reservation';

@Component({
  selector: 'app-home',
  imports: [Hero, Highlights, Offerings, About, Gallery, Location, Reservation],
  templateUrl: './home.html',
})
export class Home {}
