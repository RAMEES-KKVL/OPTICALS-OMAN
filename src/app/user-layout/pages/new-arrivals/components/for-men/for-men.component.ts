import { Component } from '@angular/core';
import { ScrollerComponent } from "../../../../../shared/components/scroller/scroller.component";
import { CommonModule } from '@angular/common';
import { BackendService } from '../../../../../services/backend.service';
import { RouterLink } from '@angular/router';
import { environments } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-for-men',
  imports: [ScrollerComponent, CommonModule, RouterLink],
  templateUrl: './for-men.component.html',
  styleUrl: './for-men.component.css'
})
export class ForMenComponent {
  products: any
  constructor(private bs: BackendService) {}

  ngOnInit() {
    this.bs.getProductsByCategory(environments.brand_1_men).subscribe({
      next: (res: any) => {
        this.products = (res.data || []).sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      },
      error: (err) => {}
    })
  }
}
