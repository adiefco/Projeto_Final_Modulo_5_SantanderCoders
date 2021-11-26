import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponentComponent } from './frame1/banner-component/banner-component.component';
import { BlocksComponent } from './frame1/blocks/blocks.component';
import { FooterComponent } from './frame1/footer/footer.component';
import { Frame1Component } from './frame1/frame1.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponentComponent,
    BlocksComponent,
    FooterComponent,
    Frame1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
