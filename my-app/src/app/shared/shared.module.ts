import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { ClockWithControlsComponent } from './clock-with-controls/clock-with-controls.component';
import { CardComponent } from './card/card.component';
import { CardTitleComponent } from './card/card-title/card-title.component';
import { ReactiveFormsModule } from '@angular/forms';



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
     // en exportant un module ici, il sera importé au moment d'importer SharedModule
    CommonModule,
    ReactiveFormsModule,


    ClockComponent,
    ClockWithControlsComponent,
    CardComponent,
    CardTitleComponent,
  ]
})
export class SharedModule { }
