import { Component } from '@angular/core';
import { CategoryBannerComponent } from "../../../shared/components/category-banner/category-banner.component";
import { ProductCategoriesComponent } from "../men/components/product-categories/product-categories.component";
import { BackendService } from '../../../services/backend.service';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { environments } from '../../../../../environments/environment';

@Component({
  selector: 'app-women',
  imports: [CategoryBannerComponent, ProductCategoriesComponent, CommonModule],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  brand_1_women = environments.brand_1_women;
  brand_1_unisex = environments.brand_1_unisex;
  category: any;
  loading: boolean = false;
  products: any
  groupedBySub: { title: string; products: any[] }[] = [];
  featuredProducts: any[] = []; 
  constructor(private bs: BackendService) {
    this.loadCategory()
  }

  loadCategory() {
    this.bs.getCategory(this.brand_1_women).subscribe({
      next: (res: any) => {
        this.category = res.data;
      },
      error: () => {}
    })
  }

  ngOnInit() {
    this.loading = true;

    forkJoin({
      men: this.bs.getProductsByCategory(this.brand_1_women),
      unisex: this.bs.getProductsByCategory(this.brand_1_unisex)
    }).subscribe({
      next: ({ men, unisex }: any) => {
        this.products = [
          ...men.data,
          ...unisex.data
        ];
        this.groupedBySub = this.groupProductsBySubCategory(this.products);
        this.featuredProducts = this.products.filter((p: any) => p.isFeatured === true);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      }
    });
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