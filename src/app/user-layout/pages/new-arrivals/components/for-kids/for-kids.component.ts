import { Component } from '@angular/core';
import { ScrollerComponent } from "../../../../../shared/components/scroller/scroller.component";
import { CommonModule } from '@angular/common';
import { BackendService } from '../../../../../services/backend.service';
import { RouterLink } from '@angular/router';
import { environments } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-for-kids',
  imports: [ScrollerComponent, RouterLink, CommonModule],
  templateUrl: './for-kids.component.html',
  styleUrl: './for-kids.component.css'
})
export class ForKidsComponent {
  brand_1_kids = environments.brand_1_kids
  products: any
  constructor(private bs: BackendService) {}

  ngOnInit() {
    this.bs.getProductsByCategory(this.brand_1_kids).subscribe({
      next: (res: any) => {
        this.products = (res.data || []).sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      },
      error: (err) => {}
    })
  }
}
