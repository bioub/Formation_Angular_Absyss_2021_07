import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { ClockWithControlsComponent } from './clock-with-controls/clock-with-controls.component';
import { CardComponent } from './card/card.component';
import { CardTitleComponent } from './card/card-title/card-title.component';



@NgModule({
  declarations: [
    ClockComponent,
    ClockWithControlsComponent,
    CardComponent,
    CardTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, // en exportant un module ici, il sera importé au moment d'importer SharedModule
    ClockComponent,
    ClockWithControlsComponent,
    CardComponent,
    CardTitleComponent,
  ]
})
export class SharedModule { }
