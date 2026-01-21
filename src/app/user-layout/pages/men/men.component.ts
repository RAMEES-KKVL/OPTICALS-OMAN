import { Component } from '@angular/core';
import { CategoryBannerComponent } from '../../../shared/components/category-banner/category-banner.component';
import { FeaturedItemsComponent } from "./components/featured-items/featured-items.component";
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { BackendService } from '../../../services/backend.service';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { environments } from '../../../../../environments/environment';

@Component({
  selector: 'app-men',
  imports: [
    CategoryBannerComponent,
    FeaturedItemsComponent,
    ProductCategoriesComponent,
    CommonModule
  ],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  brand_1_men = environments.brand_1_men;
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
    this.bs.getCategory(this.brand_1_men).subscribe({
      next: (res: any) => {
        this.category = res.data;
      },
      error: () => {}
    })
  }

  ngOnInit() {
    this.loading = true;

    forkJoin({
      men: this.bs.getProductsByCategory(this.brand_1_men),
      unisex: this.bs.getProductsByCategory(this.brand_1_unisex),
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
      error: () => {
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
  // sun = [
  //   "images/men/sun-8.jpg",
  //   "images/men/sun-7.jpg",
  //   "images/men/sun-6.jpg",
  //   "images/men/sun-5.jpg",
  //   "images/men/sun-4.jpg",
  //   "images/men/sun-3.jpg",
  //   "images/men/sun-2.webp",
  //   "images/men/sun-1.jpg",
  // ]

  // computer = [
  //   "images/men/computer-8.jpg",
  //   "images/men/computer-7.jpg",
  //   "images/men/computer-5.jpg",
  //   "images/men/computer-4.webp",
  //   "images/men/computer-3.webp",
  //   "images/men/computer-2.jpg",
  //   "images/men/computer-1.jpg",
  //   "images/men/computer-6.jpg",
  // ]

  // reading = [
  //   "images/men/reading-5.jpg",
  //   "images/men/reading-6.jpg",
  //   "images/men/reading-3.jpg",
  //   "images/men/reading-2.webp",
  //   "images/men/reading-1.jpg",
  //   "images/men/reading-8.jpg",
  //   "images/men/reading-4.jpg",
  //   "images/men/reading-7.png",
  // ]

