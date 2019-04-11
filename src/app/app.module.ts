import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrawerInputComponent } from './drawer-input/drawer-input.component';
import { FormsModule } from '@angular/forms';
import { ElementsGridComponent } from './elements-grid/elements-grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModulesModule} from './material-modules/material-modules.module';

@NgModule({
  declarations: [
    AppComponent,
    DrawerInputComponent,
    ElementsGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
