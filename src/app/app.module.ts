import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { MaterialExampleModule } from 'src/material.module';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialExampleModule, HeaderComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
