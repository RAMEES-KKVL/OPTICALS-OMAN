import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackendService } from '../../../../../services/backend.service';
import { environments } from '../../../../../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  imports: [
    CommonModule, RouterLink
  ],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {
  brand_1_unisex = environments.brand_1_unisex;
  brand_1_men = environments.brand_1_men;
  brand_1_women = environments.brand_1_women;

  products: any [] = [
    // {
    //   image: "images/home/glass-5.jpg",
    //   title: "Daltson Glossy",
    //   rate: "120.00",
    //   description: "Intense Rust"
    // },
    // {
    //   image: "images/home/glass-6.jpg",
    //   title: "Le Marais",
    //   rate: "120.00",
    //   description: "Cool Brown"
    // },
  ]

  products2: any[] = [
    {
      image: "images/home/glass-1.jpg",
      title: "Belleville",
      rate: "120.00",
      description: "Tortoise"
    },
    {
      image: "images/home/glass-2.jpg",
      title: "Osterbro",
      rate: "120.00",
      description: "Cool Blue"
    },
    {
      image: "images/home/glass-3.jpg",
      title: "Osterbro",
      rate: "120.00",
      description: "Cool Blue"
    },
    {
      image: "images/home/glass-4.jpg",
      title: "Osterbro",
      rate: "120.00",
      description: "Cool Blue"
    },
  ]

  constructor(private bs: BackendService) {}

  ngOnInit() {
    this.bs.getFeaturedProducts(this.brand_1_unisex, this.brand_1_men, this.brand_1_women,  6).subscribe({
      next: (res: any) => {
        this.products = res.data.slice(0, 2);
        this.products2 = res.data.slice(2)
      },
      error: () => {}
    })
  }
}