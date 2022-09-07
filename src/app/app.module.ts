import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagComponent } from './tag/tag.component';
import { CartComponent } from './cart/cart.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
//  import { RatingModule } from 'ng-starrating@"*"';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    CartComponent,
    FoodpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // RatingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
