import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// SERVICES
import { WhatsappService } from './services/whatsapp/whatsapp.service';
import { ProductsService } from './services/products.service';
import { MarketService } from './services/market/market.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { OurComponent } from './pages/our/our.component';
import { MarketComponent } from './pages/market/market.component';
import { CardProductComponent } from './elements/card-product/card-product.component';
import { CardCategoryComponent } from './elements/card-category/card-category.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { CategoryComponent } from './sub-pages/category/category.component';
import { ProductComponent } from './sub-pages/product/product.component';
import { SliderCardsComponent } from './sections/slider-cards/slider-cards.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'our', component: OurComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'market', component: MarketComponent },
  { path: 'product/:category', component: ProductComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    OurComponent,
    MarketComponent,
    CardProductComponent,
    CardCategoryComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    ProductComponent,
    SliderCardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WhatsappService,
    ProductsService,
    MarketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
