import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollerComponent } from '../../../../../shared/components/scroller/scroller.component';
import { CommonModule } from '@angular/common';
import { BackendService } from '../../../../../services/backend.service';
import { environments } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-for-unisex',
  imports: [ScrollerComponent, CommonModule, RouterLink],
  templateUrl: './for-unisex.component.html',
  styleUrl: './for-unisex.component.css'
})
export class ForUnisexComponent {
  products: any
    constructor(private bs: BackendService) {}
  
    ngOnInit() {
      this.bs.getProductsByCategory(environments.brand_1_unisex).subscribe({
        next: (res: any) => {
          this.products = (res.data || []).sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        },
        error: () => {}
      })
    }
}
