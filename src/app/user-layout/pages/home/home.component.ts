import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { OurSpacesComponent } from './components/our-spaces/our-spaces.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    OurSpacesComponent,
    FeaturedProductsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
