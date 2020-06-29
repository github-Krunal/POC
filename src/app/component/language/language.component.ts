import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/shared/pipe/translate.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  hide = true;
  public language_Dropdwon: any = ['en', 'du'];
  public selectalnguage: string = '';
  constructor(private languageservice: TranslateService) {}

  ngOnInit(): void {}
  onlanguageSelect(value) {
    this.languageservice.selectedLanguage(value);
  }
}
