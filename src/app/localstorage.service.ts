import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  public localStorageItem(id: string): string {
    return localStorage.getItem(id);
  }
}
