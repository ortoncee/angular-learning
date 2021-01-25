import { ConvertSpacesPipe } from './common/conert-to-spaces.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EventServices } from './services/event.service';
import { EventListComponent } from './event/event-list/event-list.component';
import { ToasterService } from './common/toastr.service';
import { EventDetailsComponent } from './event/event-detail/event-details.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent,
    EventDetailsComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ConvertSpacesPipe,
    StarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EventServices,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
