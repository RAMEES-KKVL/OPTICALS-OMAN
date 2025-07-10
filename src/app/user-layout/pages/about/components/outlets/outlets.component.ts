import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-outlets',
  imports: [],
  templateUrl: './outlets.component.html',
  styleUrl: './outlets.component.css'
})
export class OutletsComponent {
  shopTitle = "AL SEEB CITY OPTICS"
  shopDescription = "Al Seeb City Optics proudly serves customers from two convenient locations in the Sultanate of Oman — near the Shell Pump in Duqm and in the heart of Seeb Souq. We are committed to providing exceptional eye care services and a wide range of quality eyewear."
  shopImage = "images/about/shop-image-1.jpg"
  shopMap!: SafeResourceUrl;
  // shopMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8768315787433!2d58.1867979936135!3d23.680362288971523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de56e5c9e4fcd%3A0x7413683de6670087!2sFAISAL%20AL%20AMRI%20SEEB!5e0!3m2!1sen!2sin!4v1752133060489!5m2!1sen!2sin"
  constructor(private sanitizer: DomSanitizer) {
    this.shopMap = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  ngOnInit(): void {
    const unsafeMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8768315787433!2d58.1867979936135!3d23.680362288971523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de56e5c9e4fcd%3A0x7413683de6670087!2sFAISAL%20AL%20AMRI%20SEEB!5e0!3m2!1sen!2sin!4v1752133060489!5m2!1sen!2sin";
    this.shopMap = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeMapUrl);
  }
}
