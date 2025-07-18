import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { ForKidsComponent } from "./components/for-kids/for-kids.component";
import { ForWomenComponent } from "./components/for-women/for-women.component";
import { ForMenComponent } from "./components/for-men/for-men.component";

@Component({
  selector: 'app-new-arrivals',
  imports: [
    BannerComponent,
    ForKidsComponent,
    ForWomenComponent,
    ForMenComponent
],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent {

}
