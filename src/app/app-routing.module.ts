import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { AdminComponent } from './components/admin/admin.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
 
  {path: 'login/callback' , component: OktaCallbackComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'admin' , component: AdminComponent},
  {path: 'checkout' , component: CheckoutComponent},
  {path: 'cart-details' , component: CartDetailsComponent},
  {path: 'search/:keyword' , component: HomeComponent},
  {path: 'category/:id' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'category' , component: HomeComponent},
  {path: 'medicines' , component: HomeComponent},
  {path: '' , redirectTo: '/medicines', pathMatch: 'full'},
  {path: 'contacts' , component: ContactUsComponent},
  {path: 'view-product/:id', component: ViewProductComponent},
  {path: '**' , redirectTo: '/medicines', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
