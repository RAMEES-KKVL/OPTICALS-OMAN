import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private bs = inject(BackendService);

  product: any;
  related: any[] = [];
  loading = true;
  selectedImage: string = '';
  slug: string = '';

  ngOnInit() {
    this.route.paramMap.subscribe(pm => {
      const slug = pm.get('slug');
      if (!slug) return;

      this.selectedImage = "";
      this.product = null;
      this.related = [];
      this.loading = true;

      this.bs.getProductBySlug(slug).subscribe({
        next: (res: any) => {
          this.product = res.data;
          this.loading = false;
        },
        error: () => {
          this.product = null;
          this.loading = false;
        },
      });

      this.bs.getRelatedProducts(slug).subscribe({
        next: (res: any) => (this.related = res.data || []),
        error: () => (this.related = []),
      });
    });
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  getDiscountPercentage(): number {
    if (!this.product || !this.product.salePrice) return 0;
    
    const discount = ((this.product.price - this.product.salePrice) / this.product.price) * 100;
    return Math.round(discount);
  }
}