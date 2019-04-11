import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrawerInputComponent } from './drawer-input/drawer-input.component';
import { FormsModule } from '@angular/forms';
import { ElementsGridComponent } from './elements-grid/elements-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawerInputComponent,
    ElementsGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
