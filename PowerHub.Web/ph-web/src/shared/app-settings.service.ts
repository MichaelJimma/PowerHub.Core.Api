import { Injectable } from '@angular/core';
import { AppSettings } from "./app.settings";
import { Observable,of } from 'rxjs';
@Injectable()
export class AppSettingsService {
  getSettings(): AppSettings {
    return new AppSettings()
  }
}