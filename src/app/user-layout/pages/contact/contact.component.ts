import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { SpacesComponent } from './components/spaces/spaces.component';

@Component({
  selector: 'app-contact',
  imports: [
    BannerComponent,
    SpacesComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}