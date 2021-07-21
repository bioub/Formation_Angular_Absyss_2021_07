import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UsersModule } from './users/users.module';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { UserService } from './users/shared/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    TodosModule,
    UsersModule,
    AppRoutingModule, // en dernier à cause de la route wildcard "**"
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
