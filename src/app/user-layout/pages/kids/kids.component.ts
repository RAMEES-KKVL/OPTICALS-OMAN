import { Component } from '@angular/core';
import { CategoryBannerComponent } from "../../../shared/components/category-banner/category-banner.component";
import { FeaturedItemsComponent } from "./components/featured-items/featured-items.component";

@Component({
  selector: 'app-kids',
  imports: [CategoryBannerComponent, FeaturedItemsComponent],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {

} 