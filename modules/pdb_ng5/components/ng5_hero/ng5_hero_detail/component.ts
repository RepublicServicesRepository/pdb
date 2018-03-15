import { Component, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  moduleId: module.id,
  selector: 'ng5-hero-detail',
  templateUrl: 'template.html',
})
export class Ng5HeroDetail {
  @Input() 
  hero: Hero;
}
