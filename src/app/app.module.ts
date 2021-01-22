import { ConvertSpacesPipe } from './shared/conert-to-spaces.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EventServices } from './shared/event.servics';
import { EventListComponent } from './event/event-list/event-list.component';
import { ToasterService } from './common/toastr.service';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-list/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent,
    EventDetailsComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ConvertSpacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EventServices,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
