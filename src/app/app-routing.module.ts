import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './event/event-detail/event-details.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailGuard } from './product/product-detail.guard';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'events', component: EventComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
