import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExHelloworldComponent } from './ex-helloworld/ex-helloworld.component';
import { ExTristatebuttonComponent } from './ex-tristatebutton/ex-tristatebutton.component';
import { ButtongroupComponent } from './buttongroup/buttongroup.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    UserFormComponent,
    ExHelloworldComponent,
    ExTristatebuttonComponent,
    ButtongroupComponent,
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule, // Template Driven Form
    ReactiveFormsModule, // Reactive Form
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
