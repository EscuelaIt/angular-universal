import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { SeoService } from '../seo.service';
import { UniversalService } from '../universal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries$: Observable<any[]>;

  constructor(
    private universal: UniversalService,
    private api: ApiService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.countries$ = this.api.getAllCountries$();
    this.seo.setTitle('EscuelaIT: Universal');
    this.universal.setItem('EscuelaIT', 'Angular-Universal');
  }
}
