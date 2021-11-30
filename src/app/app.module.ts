import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {HslayersAppComponent} from './app.component';
import {HslayersMaterialModule} from 'hslayers-material';

@NgModule({
  declarations: [HslayersAppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HslayersMaterialModule],
  providers: [],
  bootstrap: [HslayersAppComponent],
})
export class AppModule {}
