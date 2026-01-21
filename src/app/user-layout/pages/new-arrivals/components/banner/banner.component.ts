import { Component } from '@angular/core';
import { BackendService } from '../../../../../services/backend.service';
import { environments } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  brand_1_unisex = environments.brand_1_unisex;
  category: any;
  constructor(private bs: BackendService) {
    this.loadCategory()
  }

  loadCategory() {
    this.bs.getCategory(this.brand_1_unisex).subscribe({
      next: (res: any) => {
        this.category = res.data;
      },
      error: () => {}
    })
  }
}
