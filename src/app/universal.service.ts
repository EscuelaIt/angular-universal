import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {
  isInBrowser = true;
  private memoryStorage: Map<string, string> = new Map<string, string>();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isInBrowser = isPlatformBrowser(this.platformId);
  }

  setItem(key: string, value: string) {
    if (this.isInBrowser) {
      localStorage.setItem(key, value);
    } else {
      this.memoryStorage.set(key, value);
    }
  }
}
