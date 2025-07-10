import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  imports: [
    CommonModule
  ],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {
  products = [
    {
      image: "images/home/glass-5.jpg",
      title: "Daltson Glossy",
      rate: "120.00",
      description: "Intense Rust"
    },
    {
      image: "images/home/glass-6.jpg",
      title: "Le Marais",
      rate: "120.00",
      description: "Cool Brown"
    },
  ]

  products2 = [
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
}