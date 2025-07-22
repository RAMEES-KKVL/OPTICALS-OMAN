import { Component } from '@angular/core';
import { CategoryBannerComponent } from '../../../shared/components/category-banner/category-banner.component';
import { FeaturedItemsComponent } from "./components/featured-items/featured-items.component";

@Component({
  selector: 'app-men',
  imports: [
    CategoryBannerComponent,
    FeaturedItemsComponent
],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {

}
