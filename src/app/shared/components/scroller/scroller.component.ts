import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroller',
  imports: [
    CommonModule
  ],
  templateUrl: './scroller.component.html',
  styleUrl: './scroller.component.css'
})
export class ScrollerComponent {
contents = [
    "Modern Comfort", "Effortless Style", "Clear Vision", "Timeless Elegance", "Perfect Fit", "New collections",
    "Modern Comfort", "Effortless Style", "Clear Vision", "Timeless Elegance", "Perfect Fit", "New collections",
    "Modern Comfort", "Effortless Style", "Clear Vision", "Timeless Elegance", "Perfect Fit", "New collections",
    "Modern Comfort", "Effortless Style", "Clear Vision", "Timeless Elegance", "Perfect Fit", "New collections",
    "Modern Comfort", "Effortless Style", "Clear Vision", "Timeless Elegance", "Perfect Fit", "New collections",
  ]

  @ViewChild('marqueeContent') marqueeContent!: ElementRef;

  // Configuration for the scroll effect
  private scrollSpeed = 0.5; // Adjust this value to make it scroll faster or slower
  private groupWidth = 0;

  // The Renderer2 is the safe, Angular way to manipulate DOM element styles
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.groupWidth = this.marqueeContent.nativeElement.children[0].offsetWidth;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    window.requestAnimationFrame(() => {
      this.updateMarqueePosition();
    });
  }
  
  private updateMarqueePosition(): void {
    if (!this.marqueeContent || this.groupWidth === 0) {
      return;
    }

    const totalScroll = window.scrollY * this.scrollSpeed;
    const translationX = totalScroll % this.groupWidth;

    // 3. Apply the transform style using Renderer2
    this.renderer.setStyle(
      this.marqueeContent.nativeElement,
      'transform',
      `translateX(-${translationX}px)`
    );
  }
}
