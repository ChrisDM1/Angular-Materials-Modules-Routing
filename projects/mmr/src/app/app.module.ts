import { CommonMaterialModule } from 'projects/lib-all/src/lib/styles/directives/style-code/common-material.module';
import { IconSnackComponent } from './icon-snack/icon-snack.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { parentMenu } from './config/menu.config';
import { SdNavModule } from 'projects/lib-all/src/lib/structure/side/sd-nav/sd-nav.module';
import { MaterialModule } from 'projects/lib-all/src/lib/styles/material/material.module';
import { ImporterThreeMethodsModule } from './importer-three-methods/importer-three-methods.module';
import { AppWideIconsModule } from './importer-three-methods/app-wide-icons.module';
import { one } from './nestedLazy/o1/o1.component';
import { oneb } from './nestedLazy/o1/ob.component';
import { DirectLettersModule } from './nestedLazy/direct-letters/direct-letters.module';
import { YThreeDeepModule } from './nestedLazy/direct-letters/y-three-deep/y-three-deep.module';
import { TwoModule } from './nestedLazy/two/two.module';
import { RoutingComponent } from './routing/routing.component';
import { NestedLazyComponent } from './nestedLazy/nested-lazy.component';
import { StyleCodeModule } from 'projects/lib-all/src/lib/styles/directives/style-code/style-code.module';
import { ParamsComponent } from './routing/params/params.component';
import { RoutingExamplesModule } from './routing/routing-examples.module';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


@NgModule({
  declarations: [
//THREE METHODS    
    AppComponent,
    IconSnackComponent,
//NESTED
    one,oneb, RoutingComponent, NestedLazyComponent, ParamsComponent
  ],
  imports: [
    ImporterThreeMethodsModule, 
    CommonMaterialModule, 
    AppWideIconsModule,
//NESTED
    DirectLettersModule,
    YThreeDeepModule,
    TwoModule, 
    StyleCodeModule,
//THREE METHODS 
    BrowserModule,
    AppRoutingModule,
//ROUTING EXAMPLES
  RoutingExamplesModule,

  NgxPageScrollCoreModule,
 
//Guards

// GuardsModule, 

    BrowserAnimationsModule,
     SdNavModule.forRoot({
      parentMenu: parentMenu
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



//imports[]

   

