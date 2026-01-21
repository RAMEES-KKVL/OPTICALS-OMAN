import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-banner',
  imports: [
    CommonModule, RouterLink
  ],
  templateUrl: './category-banner.component.html',
  styleUrl: './category-banner.component.css'
})
export class CategoryBannerComponent {
  @Input() bannerImg: any;
  @Input() products: any;
}
