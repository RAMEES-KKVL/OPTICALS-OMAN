import { Component } from '@angular/core';
import { CategoryBannerComponent } from "../../../shared/components/category-banner/category-banner.component";
import { FeaturedItemsComponent } from "./components/featured-items/featured-items.component";
import { CategoriesComponent } from "./components/categories/categories.component";

@Component({
  selector: 'app-kids',
  imports: [CategoryBannerComponent, FeaturedItemsComponent, CategoriesComponent],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {
  eye = [
    "images/kids/eye-2.avif",
    "images/kids/eye-5.jpg",
    "images/kids/eye-3.jpg",
    "images/kids/eye-6.webp",
    "images/kids/eye-8.webp",
    "images/kids/eye-7.jpg",
    "images/kids/eye-4.webp",
    "images/kids/eye-2.webp",
  ]

  readingGlassess = [
    "images/kids/reading-5.webp",
    "images/kids/reading-1.webp",
    "images/kids/reading-2.jpg",
    "images/kids/reading-3.webp",
    "images/kids/reading-4.jpg",
    "images/kids/reading-6.jpg",
    "images/kids/reading-7.webp",
    "images/kids/reading-8.jpg",
  ]

  computerGlassess = [
    "images/kids/computer-3.webp",
    "images/kids/computer-5.webp",
    "images/kids/computer-1.jpg",
    "images/kids/computer-2.webp",
    "images/kids/computer-4.webp",
    "images/kids/computer-6.webp",
    "images/kids/computer-7.jpg",
    "images/kids/computer-8.jpg",
  ]
}  