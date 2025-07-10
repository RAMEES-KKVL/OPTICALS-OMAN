import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';

@Component({
  selector: 'app-about',
  imports: [
    BannerComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
