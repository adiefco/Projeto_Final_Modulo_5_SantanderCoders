import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponentComponent } from './banner-component/banner-component.component';
import { BlocksComponent } from './blocks/blocks.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponentComponent,
    BlocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
