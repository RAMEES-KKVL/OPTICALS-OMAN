import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [
    CommonModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      review: "Perfect blend of style and function. The lenses are crystal clear, and the frames feel durable without compromising on comfort.",
      author: "Albert F",
      image: "images/home/glass-1.jpg"
    },
    {
      review: "I’ve never worn such comfortable glasses! The frames are lightweight yet sturdy, and I love the stylish design.",
      author: "Angeline T",
      image: "images/home/glass-4.jpg"
    },
    {
      review: "These glasses completely changed my look! I get compliments everywhere I go, and they’re so comfortable too",
      author: "Raoof P",
      image: "images/home/glass-3.jpg"
    },
  ]
}
