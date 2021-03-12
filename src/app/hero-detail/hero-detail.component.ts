import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService} from "../hero.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 /*  @Input() hero: Hero */
  hero: Hero
  constructor(private heroService : HeroService, private router : ActivatedRoute, private location: Location ) {}

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
  this.location.back();
  }

  getHero(){
    const id =this.router.snapshot.paramMap.get('id');
    this.heroService.getHeroe(Number(id)).subscribe(hero => this.hero = hero);
  }
}
