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

}  