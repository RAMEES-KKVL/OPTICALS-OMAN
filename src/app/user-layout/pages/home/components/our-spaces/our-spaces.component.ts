import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-spaces',
  imports: [
    CommonModule
  ],
  templateUrl: './our-spaces.component.html',
  styleUrl: './our-spaces.component.css'
})
export class OurSpacesComponent {
  shops = [
    {
      title: "Alseeb city optics duqm",
      description: "Discover our stylish and durable glasses, designed for comfort and everyday wear.",
      image: "images/home/shop-1.jpg"
    },
    {
      title: "AL AMRI OPTICALS",
      description: "Discover our stylish and durable glasses, designed for comfort and everyday wear.",
      image: "images/home/shop-2.jpg"
    },
    {
      title: "AL AMRI OPTICALS FALAJ",
      description: "Discover our stylish and durable glasses, designed for comfort and everyday wear.",
      image: "images/home/shop-3.jpg"
    },
    {
      title: "FAISAL AL AMRI SEEB",
      description: "Discover our stylish and durable glasses, designed for comfort and everyday wear.",
      image: "images/home/shop-1.jpg"
    },
  ]
}