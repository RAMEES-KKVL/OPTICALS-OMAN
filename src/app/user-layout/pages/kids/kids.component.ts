import { Component } from '@angular/core';
import { CategoryBannerComponent } from "../../../shared/components/category-banner/category-banner.component";
import { FeaturedItemsComponent } from "./components/featured-items/featured-items.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { BackendService } from '../../../services/backend.service';
import { CommonModule } from '@angular/common';
import { environments } from '../../../../../environments/environment';

@Component({
  selector: 'app-kids',
  imports: [CategoryBannerComponent, FeaturedItemsComponent, CategoriesComponent, CommonModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {
  brand_1_kids = environments.brand_1_kids
  loading: boolean = false;
  products: any
  groupedBySub: { title: string; products: any[] }[] = [];
  featuredProducts: any[] = []; 
  constructor(private bs: BackendService) {}

  ngOnInit() {
    this.bs.getProductsByCategory(this.brand_1_kids).subscribe({
      next: (res: any) => {
        this.products = res.data || [];
        this.groupedBySub = this.groupProductsBySubCategory(this.products);
        this.featuredProducts = this.products.filter((p: any) => p.isFeatured === true); 
      },
      error: (err) => {}
    })
  }

  private groupProductsBySubCategory(items: any[]) {
    const map = items.reduce((acc: Record<string, any[]>, p: any) => {
      const title = p?.subCategoryId?.name || p?.subCategoryId || 'Other';

      (acc[title] ||= []).push(p);
      return acc;
    }, {});

    return Object.keys(map).map(title => ({
      title,
      products: map[title]
    }));
  }
}  