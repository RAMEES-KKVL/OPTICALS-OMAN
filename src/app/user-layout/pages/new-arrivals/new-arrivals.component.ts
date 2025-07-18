import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { ForKidsComponent } from "./components/for-kids/for-kids.component";
import { ForWomenComponent } from "./components/for-women/for-women.component";

@Component({
  selector: 'app-new-arrivals',
  imports: [
    BannerComponent,
    ForKidsComponent,
    ForWomenComponent
],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent {

}
