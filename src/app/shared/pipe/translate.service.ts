import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  public localeUrl: string = '../../../assets/language/';
  public currentLanguage: string;
  public currenLanguageTranslations: any;
  constructor(private http: HttpClient) {
    const languageId = this.currentLanguage ? this.currentLanguage : 'en';
    this.getTranslationsByLocaleId(languageId);
  }
  public selectedLanguage(language) {
    if (this.currentLanguage !== language) {
      this.currentLanguage = language;
      this.getTranslationsByLocaleId(this.currentLanguage);
    }
  }
  public getTranslationsByLocaleId(localeId: string) {
    if (localeId === 'en') {
      localeId = 'en';
    }
    const localeIdUrl = `${this.localeUrl}${localeId}.json`;
    return this.http.get(localeIdUrl).subscribe((json: any) => {
      this.currenLanguageTranslations = json;
    });
  }
}
