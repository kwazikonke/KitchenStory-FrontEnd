import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { ProductComponent } from './Pages/product/product.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductUpdateComponent } from './Components/product-update/product-update.component';
import { ProductIndexComponent } from './Pages/product-index/product-index.component';
import { AdminHomeComponent } from './Pages/admin-home/admin-home.component';
import { CustomerHomeComponent } from './Pages/customer-home/customer-home.component';
import { HeaderComponent } from './Layout/header/header.component';
import { ProductsingleComponent } from './Components/productsingle/productsingle.component';

const routes: Routes = [
  { path: '', component: AdminHomeComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: ProductComponent },
  { path: 'index',component:ProductIndexComponent},
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'update-product/:id', component: ProductUpdateComponent },

  ///////////////////////////CUSTOMER///////////////////////////////////////
  { path: 'customer', component: CustomerHomeComponent },
  { path: 'items', component: ProductsingleComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
