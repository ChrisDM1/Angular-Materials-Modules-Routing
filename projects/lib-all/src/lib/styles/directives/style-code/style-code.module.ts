import { SpanClickComponent } from './div-text/spanClick.component';

import { FloatBoxComponent } from './div-text/float-box/float-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Div INSERTS
import { DivTextComponent } from './div-text/div-text.component';
import { DivOpenComponent } from './div-text/divOpen.component';
import { DivCloseComponent } from './div-text/divClose.component';
import { DivExitComponent } from './div-text/divExit.component';




//DIV TEXT (Colours & Pop UP)
import { GreenComponent } from './div-text/dkGreen.component';
import { LGreenComponent } from './div-text/dLGreen.component';
import { OrangeComponent } from './div-text/dOrange.component';
import { YellowComponent } from './div-text/dYellow.component';
import { PurpleComponent } from './div-text/dPurple.component';
import { BlueComponent } from './div-text/dkBlue.component';
import { LBlueComponent } from './div-text/dLBlue.component';

import { PopCommentComponent } from './div-text/dPopComm.component';
import { BoldComponent } from './div-text/dBold.component';
import * as myGlobals from './globals';
import { WhiteComponent } from './div-text/dWhite.component';
import { CodeBoxComponent } from './div-text/code-box/code-box.component';
import { StyleLikeThisDirective } from './style-like-this.directive';
import { StyleObjectDirective } from './style-object.directive';
import { ClickOpenComponent } from './click-open/click-open.component';
import { RedComponent } from './div-text/dRed.component';
import { BgBlkDivComponent } from './div-text/bgBlkDiv.component';
import { BgBlkSpanComponent } from './div-text/bgBlkSpan.component';

import { DivInsertsComponent } from './div-inserts/div-inserts.component';




@NgModule({
  declarations: [
    BlueComponent,
    YellowComponent,
    GreenComponent,
    OrangeComponent,
    PurpleComponent,
    RedComponent,
    LBlueComponent,
    LGreenComponent,
    WhiteComponent,
                 BoldComponent,
                 FloatBoxComponent,
                 DivInsertsComponent,
                 
                 DivTextComponent,
                 DivOpenComponent,
                 DivCloseComponent,
                 DivExitComponent, 
                 PopCommentComponent,
                 CodeBoxComponent,
                StyleLikeThisDirective,
                StyleObjectDirective,
                ClickOpenComponent,
                SpanClickComponent,
                BgBlkSpanComponent,
                BgBlkDivComponent,

                 ],
  imports: [
    CommonModule
  ],
  exports:[
    BlueComponent,
    YellowComponent,
    GreenComponent,
    OrangeComponent,
    PurpleComponent,
    LBlueComponent,
    LGreenComponent,
    WhiteComponent,
    RedComponent,
    


    BoldComponent,
    FloatBoxComponent,
    DivTextComponent,
    DivOpenComponent,
    DivCloseComponent,
    DivExitComponent, 
    PopCommentComponent,
    CodeBoxComponent,
    StyleLikeThisDirective,
    StyleObjectDirective,
    ClickOpenComponent,
    SpanClickComponent,
    BgBlkSpanComponent,
    BgBlkDivComponent,
    DivInsertsComponent
  ]
})
export class StyleCodeModule { }
