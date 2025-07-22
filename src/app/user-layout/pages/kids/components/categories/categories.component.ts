import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [
    CommonModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  showLeftButton = false;
  showRightButton = true;
  @Input() title = ""

  products = [
    "images/home/glass-3.jpg",
    "images/home/glass-4.jpg",
    "images/home/glass-4.jpg",
    "images/home/glass-5.jpg",
    "images/home/glass-6.jpg",
    "images/home/glass-2.jpg",
    "images/home/glass-3.jpg",
    "images/home/glass-4.jpg",
    "images/home/glass-5.jpg",
    "images/home/glass-6.jpg",
    "images/home/glass-2.jpg",
    "images/home/glass-3.jpg",
    "images/home/glass-4.jpg",
    "images/home/glass-5.jpg",
    "images/home/glass-6.jpg",
    "images/home/glass-2.jpg",
    "images/home/glass-3.jpg",
    "images/home/glass-4.jpg",
  ]

  ngAfterViewInit(): void {
    setTimeout(() => this.checkScroll(), 0);
  }


  scroll(direction: 'left' | 'right'): void {
    const scrollAmount = 364; 
    const container = this.imageContainer.nativeElement;
    const newScrollPosition = direction === 'right'
      ? container.scrollLeft + scrollAmount
      : container.scrollLeft - scrollAmount;
      
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });

    this.checkScroll( )
  }

  checkScroll() {
    const container = this.imageContainer.nativeElement
    this.showLeftButton = container.scrollLeft > 0
    
    const atEnd = container.scrollWidth - container.clientWidth - container.scrollLeft < 5
      
    this.showRightButton = !atEnd
  }
}
