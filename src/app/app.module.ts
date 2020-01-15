import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterestComponent } from './interest/interest.component';
import { InterestsWrapperComponent } from './interests/interests-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    InterestsWrapperComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
