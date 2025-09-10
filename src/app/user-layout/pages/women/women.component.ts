import { Component } from '@angular/core';
import { CategoryBannerComponent } from "../../../shared/components/category-banner/category-banner.component";
import { ProductCategoriesComponent } from "../men/components/product-categories/product-categories.component";

@Component({
  selector: 'app-women',
  imports: [CategoryBannerComponent, ProductCategoriesComponent],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
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