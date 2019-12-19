import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private countryEndPoint = 'https://api.worldbank.org/v2/country';
  private format = '?per_page=1000&format=json';

  constructor(private httpClient: HttpClient) {}

  getAllCountries$(): Observable<any[]> {
    const url = this.countryEndPoint + this.format;
    return this.httpClient.get<any[]>(url).pipe(
      map((result: any[]) => result[1]),
      map((result: any[]) => result.filter(c => c.capitalCity !== ''))
    );
  }

  getCountryById$(countryId: string) {
    const url = this.countryEndPoint + '/' + countryId + this.format;
    return this.httpClient.get<any>(url).pipe(map(result => result[1][0]));
  }
}
