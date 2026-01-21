import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [
    CommonModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials = [
    {
      review: "Perfect blend of style and function. The lenses are crystal clear, and the frames feel durable without compromising on comfort.",
      author: "Albert F",
      image: "images/testimonial/image-1.jpg"
    },
    {
      review: "I’ve never worn such comfortable glasses! The frames are lightweight yet sturdy, and I love the stylish design.",
      author: "Angeline T",
      image: "images/testimonial/image-9.jpg"
    },
    {
      review: "These glasses completely changed my look! I get compliments everywhere I go, and they’re so comfortable too",
      author: "Raoof P",
      image: "images/testimonial/image-3.jpg"
    },
    {
      review: "Stylish and incredibly lightweight. I can wear them all day without feeling any pressure on my nose or ears.",
      author: "Muhammed K",
      image: "images/testimonial/image-4.jpeg"
    },
    {
      review: "Absolutely love the design! They match every outfit and make me feel more confident instantly.",
      author: "Suhail K",
      image: "images/testimonial/image-5.jpg"
    },
    {
      review: "I’ve tried many brands, but these frames stand out for their build quality and premium feel.",
      author: "Shahal Shah",
      image: "images/testimonial/image-6.jpg"
    },
    {
      review: "My eyes don’t feel tired even after long hours of screen time. These lenses are a game changer.",
      author: "Fathima M",
      image: "images/testimonial/image-7.jpg"
    },
    {
      review: "Comfort meets elegance! I didn’t think glasses could look this good and feel this comfortable.",
      author: "Noora",
      image: "images/testimonial/image-8.jpg"
    }
  ]

  transitioning = false;
  direction: 'next' | 'prev' | null = null;
  animationDuration = 500; 

  nextTestimonial() {
    if (this.transitioning) return;

    this.transitioning = true;
    this.direction = 'next';

    setTimeout(() => {
      const first = this.testimonials.shift();
      if (first) {
        this.testimonials.push(first);
      }
      this.direction = null; 
      this.transitioning = false;
    }, this.animationDuration);
  }

  prevTestimonial() {
    if (this.transitioning) return;
    
    const last = this.testimonials.pop();
    if (last) {
      this.testimonials.unshift(last);
    }
    
    this.transitioning = true;
    this.direction = 'prev';

    setTimeout(() => {
      this.direction = null;
      this.transitioning = false;
    }, this.animationDuration);
  }
}
