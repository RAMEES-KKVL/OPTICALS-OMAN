import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafeUrlPipe } from '../../../../../shared/pipes/safeUrl.pipe';

@Component({
  selector: 'app-outlets',
  imports: [
    CommonModule,
    SafeUrlPipe
  ],
  templateUrl: './outlets.component.html',
  styleUrl: './outlets.component.css'
})
export class OutletsComponent {
  locations = [
    {
      shopTitle: "Alseeb city optics duqm",
      shopDescription: "Al Seeb City Optics proudly serves customers from two convenient locations in the Sultanate of Oman — near the Shell Pump in Duqm and in the heart of Seeb Souq. We are committed to providing exceptional eye care services and a wide range of quality eyewear.",
      shopImage: "images/about/shop-image-1.jpg",
      shopMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.87589233476515!2d57.63509869402749!3d19.626687365729367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e82898ae59cbf79%3A0x98f6a2d4936ddeb7!2zQWxzZWViIGNpdHkgb3B0aWNzIGR1cW0sINio2LXYsdmK2KfYqiDZhdiv2YrZhtipINin2YTYs9mK2KggLNin2YTYr9mC2YU!5e0!3m2!1sen!2sin!4v1752488729236!5m2!1sen!2sin"
    },
    {
      shopTitle: "Al Amri opticals",
      shopDescription: "Al Amri Opticals proudly serves customers from two convenient locations in the Sultanate of Oman — near the Shell Pump in Duqm and in the heart of Seeb Souq. We are committed to providing exceptional eye care services and a wide range of quality eyewear.",
      shopImage: "images/about/shop-image-1.jpg",
      shopMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9241901041364!2d58.5417204761885!3d22.693865879405557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e90234c38c551fd%3A0x8e1c944c3291a4c9!2sAl%20Amri%20opticals!5e0!3m2!1sen!2sin!4v1752488894926!5m2!1sen!2sin"
    },
    {
      shopTitle: "AL AMRI OPTICALS FALAJ",
      shopDescription: "Al Amri Opticals Falaj proudly serves customers from two convenient locations in the Sultanate of Oman — near the Shell Pump in Duqm and in the heart of Seeb Souq. We are committed to providing exceptional eye care services and a wide range of quality eyewear.",
      shopImage: "images/about/shop-image-1.jpg",
      shopMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930012.0909846475!2d55.39743237812499!3d24.42094019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8b49486cbe9267%3A0x5f043833596173cd!2zQUwgQU1SSSBPUFRJQ0FMUyBGQUxBSiDYp9mE2LnYp9mF2LHZiiDZhNmE2YbYuNin2LHYp9iqINmB2YTYrCDYp9mE2YLYqNin2KbZhA!5e0!3m2!1sen!2sin!4v1752489257237!5m2!1sen!2sin"
    },
    {
      shopTitle: "FAISAL AL AMRI SEEB",
      shopDescription: "Faisal Al Amri Seeb proudly serves customers from two convenient locations in the Sultanate of Oman — near the Shell Pump in Duqm and in the heart of Seeb Souq. We are committed to providing exceptional eye care services and a wide range of quality eyewear.",
      shopImage: "images/about/shop-image-1.jpg",
      shopMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7307.766644378105!2d58.17384154615411!3d23.680130214873536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de56e5c9e4fcd%3A0x7413683de6670087!2sFAISAL%20AL%20AMRI%20SEEB!5e0!3m2!1sen!2sin!4v1752489327228!5m2!1sen!2sin"
    }
  ]
}
