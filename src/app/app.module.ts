import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppService} from './app.service';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {ExcelService} from './excel.service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule
  ],
  providers: [
    AppService,
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
