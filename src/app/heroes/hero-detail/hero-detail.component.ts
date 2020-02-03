import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
    ) { }
    
  ngOnInit() {
    this.service.getHero(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.hero = data;
      console.log(this.hero);
    });
  }

  // gotoHeroes(hero: Hero) {
  //   let heroId = hero ? hero.id : null;
  //   this.router.navigate(['/heroes']);
  // }

  }