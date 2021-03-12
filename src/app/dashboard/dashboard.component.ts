import { Component, OnInit } from '@angular/core';
import { HeroService} from "../hero.service";
import {Hero} from "../hero";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService : HeroService, private router : ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  /* getHero(){
    const id =this.router.snapshot.paramMap.get('id');
    this.heroService.getHeroe(Number(id)).subscribe(hero => this.hero = hero);
  } */

}
