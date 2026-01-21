import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { OutletsComponent } from './components/outlets/outlets.component';

@Component({
  selector: 'app-about',
  imports: [
    BannerComponent,
    OutletsComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
