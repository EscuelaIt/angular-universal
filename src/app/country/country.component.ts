import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country$: Observable<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    const countryId = this.activatedRoute.snapshot.params.id;
    this.country$ = this.api.getCountryById$(countryId).pipe(
      tap(country => {
        this.seo.setTitle(country.name);
        this.seo.setDescription(
          `${country.name} is a country from ${country.region.value} and its capital is ${country.capitalCity}`
        );
        this.seo.setKeywords(
          `${country.name} , ${country.region.value} , ${country.capitalCity}`
        );
      })
    );
  }
}
