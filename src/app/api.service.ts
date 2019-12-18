import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private countryEndPoint = 'https://api.worldbank.org/v2/country';
  private regionEndPoint = 'https://api.worldbank.org/v2/region';
  private format = '?per_page=1000&format=json';

  constructor(private httpClient: HttpClient) {}

  getAllCountries$(): Observable<any[]> {
    const url = this.countryEndPoint + this.format;
    return this.httpClient
      .get<any[]>(url)
      .pipe(map((result: any[]) => result[1]));
  }
}
