import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainFormComponent } from './main-form/main-form.component';
import { MyCardComponent } from './my-card/my-card.component';
import { DisplayCardComponent } from './display-card/display-card.component';



@NgModule({
  declarations: [		
    AppComponent,
      MainFormComponent,
      MyCardComponent,
      DisplayCardComponent
   ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
