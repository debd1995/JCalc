import { Injectable } from '@angular/core';
import { ISettings } from '../models/settings';
import { AppConstant } from '../utils/app-constant';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveSettings(settings: ISettings): void {
    localStorage
      .setItem(AppConstant.SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  }

  getSettings(): ISettings | null {
    let data = localStorage.getItem(AppConstant.SETTINGS_STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }
}