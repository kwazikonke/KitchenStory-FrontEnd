import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './Pages/product/product.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductIndexComponent } from './Pages/product-index/product-index.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductUpdateComponent } from './Components/product-update/product-update.component';
import { AdminHomeComponent } from './Pages/admin-home/admin-home.component';
import { CustomerHomeComponent } from './Pages/customer-home/customer-home.component';
import { HeaderComponent } from './Layout/header/header.component';
import { RouterModule } from '@angular/router';
import { ForbidenComponent } from './Components/forbiden/forbiden.component';
import { AuthGuard } from './Authentication/auth.guard';
import { AuthInterceptor } from './Authentication/auth.interceptor';
import { LoginService } from './Services/login.service';
import { ProductsingleComponent } from './Components/productsingle/productsingle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    ProductIndexComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    AdminHomeComponent,
    CustomerHomeComponent,
    HeaderComponent,
    ForbidenComponent,
    ProductsingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
      AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
