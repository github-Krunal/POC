import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslateService) {}

  transform(value: string): string {
    if (
      this.translationService.currenLanguageTranslations &&
      this.translationService.currenLanguageTranslations.hasOwnProperty(value)
    ) {
      debugger;
      return this.translationService.currenLanguageTranslations[value];
    } else {
      return value;
    }
  }
}
