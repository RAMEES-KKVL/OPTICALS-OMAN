import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-banner',
  imports: [
    CommonModule
  ],
  templateUrl: './category-banner.component.html',
  styleUrl: './category-banner.component.css'
})
export class CategoryBannerComponent {
  @Input() bannerImg: any
}
