import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries$: Observable<any[]>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.countries$ = this.api.getAllCountries$();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('EscuelaIT', 'Angular-Universal');
    } else {
      console.log('Estamos en el servidor');
    }
  }
}
