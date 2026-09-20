import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Highlights } from '../../sections/highlights/highlights';
import { Featured } from '../../sections/featured/featured';
import { Offerings } from '../../sections/offerings/offerings';
import { Gallery } from '../../sections/gallery/gallery';
import { Reservation } from '../../sections/reservation/reservation';
import { Location } from '../../sections/location/location';

@Component({
  selector: 'app-home',
  imports: [Hero, Highlights, Featured, Offerings, Gallery, Reservation, Location],
  templateUrl: './home.html',
})
export class Home {}
