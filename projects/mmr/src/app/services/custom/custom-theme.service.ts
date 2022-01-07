import { ThemeService } from 'projects/lib-all/src/lib/styles/my-theme/my-theme.service';
import { Injectable } from '@angular/core';
import { themeConfigObject } from '../../config/theme.config';


@Injectable({
  providedIn: 'root'
})
export class CustomThemeService extends ThemeService {
  constructor(){
    super();
    this.h = Object.assign(this.h,themeConfigObject);
  }

  public h:any;
}

// t:CustomThemeService  ==> HTML => t.h