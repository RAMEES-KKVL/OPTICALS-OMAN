import { Component } from '@angular/core';
import { CategoryBannerComponent } from '../../../shared/components/category-banner/category-banner.component';
import { FeaturedItemsComponent } from "./components/featured-items/featured-items.component";
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';

@Component({
  selector: 'app-men',
  imports: [
    CategoryBannerComponent,
    FeaturedItemsComponent,
    ProductCategoriesComponent
],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  products = [
    "images/home/glass-3.jpg",
    "images/home/glass-4.jpg",
    "images/home/glass-4.jpg",
    "images/home/glass-5.jpg",
    "images/home/glass-6.jpg",
    "images/home/glass-2.jpg",
    "images/home/glass-3.jpg",
    "images/home/glass-4.jpg",
    "images/home/glass-5.jpg",
    "images/home/glass-6.jpg",
    "images/home/glass-2.jpg",
    "images/home/glass-3.jpg",
    "images/home/glass-4.jpg",
    "images/home/glass-5.jpg",
    "images/home/glass-6.jpg",
    "images/home/glass-2.jpg",
    "images/home/glass-3.jpg",
    "images/home/glass-4.jpg",
  ]
}
