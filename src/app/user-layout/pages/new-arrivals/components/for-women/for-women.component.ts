import { Component } from '@angular/core';
import { ScrollerComponent } from "../../../../../shared/components/scroller/scroller.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-for-women',
  imports: [ScrollerComponent, CommonModule],
  templateUrl: './for-women.component.html',
  styleUrl: './for-women.component.css'
})
export class ForWomenComponent {
  glasses = [
    "images/women/sun-8.jpg",
    "images/women/sun-7.webp",
    "images/women/sun-5.avif",
    "images/women/sun-4.webp",
    "images/women/sun-6.jpg",
    "images/women/sun-3.jpg",
    "images/women/sun-2.webp",
    "images/women/sun-1.jpg",
    "images/women/computer-3.webp",
    "images/women/computer-8.jpeg",
    "images/women/computer-7.webp",
    "images/women/computer-5.webp",
    "images/women/computer-4.jpg",
    "images/women/computer-2.webp",
    "images/women/computer-1.jpg",
    "images/women/computer-6.webp",
    "images/women/reading-5.jpg",
    "images/women/reading-6.jpg",
    "images/women/reading-3.jpeg",
    "images/women/reading-2.jpeg",
    "images/women/reading-1.jpg",
    "images/women/reading-8.avif",
    "images/women/reading-4.jpg",
    "images/women/reading-7.avif",
  ]
}
