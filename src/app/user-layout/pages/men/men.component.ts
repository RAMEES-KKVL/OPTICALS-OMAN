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
 sun = [
    "images/men/sun-8.jpg",
    "images/men/sun-7.jpg",
    "images/men/sun-6.jpg",
    "images/men/sun-5.jpg",
    "images/men/sun-4.jpg",
    "images/men/sun-3.jpg",
    "images/men/sun-2.webp",
    "images/men/sun-1.jpg",
  ]

  computer = [
    "images/men/computer-8.jpg",
    "images/men/computer-7.jpg",
    "images/men/computer-5.jpg",
    "images/men/computer-4.webp",
    "images/men/computer-3.webp",
    "images/men/computer-2.jpg",
    "images/men/computer-1.jpg",
    "images/men/computer-6.jpg",
  ]

  reading = [
    "images/men/reading-5.jpg",
    "images/men/reading-6.jpg",
    "images/men/reading-3.jpg",
    "images/men/reading-2.webp",
    "images/men/reading-1.jpg",
    "images/men/reading-8.jpg",
    "images/men/reading-4.jpg",
    "images/men/reading-7.png",
  ]
}
