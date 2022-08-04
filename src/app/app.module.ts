import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingDialogComponent } from './components/setting-dialog/setting-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
