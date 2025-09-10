import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { SafeUrlPipe } from '../../../../../shared/pipes/safeUrl.pipe';

@Component({
  selector: 'app-our-spaces',
  imports: [
    CommonModule,
    SafeUrlPipe
  ],
  templateUrl: './our-spaces.component.html',
  styleUrl: './our-spaces.component.css'
})
export class OurSpacesComponent {
  shops = [
    {
      title: "Alseeb city optics Seeb",
      description: "Discover our stylish and durable glasses, designed for comfort and everyday wear.",
      image: "images/home/shop-1.jpg",
      shopMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58463.059771928965!2d58.11275474863281!3d23.678059400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dfd0e69294261%3A0xd5911b8e5de6a76!2sAL%20SEEB%20CITY%20OPTICS!5e0!3m2!1sen!2sin!4v1754483817579!5m2!1sen!2sin"
    },
    {
      title: "AL AMRI OPTICALS SOHAR",
      description: "Discover our stylish and durable glasses, designed for comfort and everyday wear.",
      image: "images/home/shop-2.jpg",
      shopMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9241901041364!2d58.5417204761885!3d22.693865879405557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e90234c38c551fd%3A0x8e1c944c3291a4c9!2sAl%20Amri%20opticals!5e0!3m2!1sen!2sin!4v1752488894926!5m2!1sen!2sin"
    },
    {
      title: "Alseeb city optics duqm",
      description: "Discover our stylish and durable glasses, designed for comfort and everyday wear.",
      image: "images/home/shop-1.jpg",
      shopMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.87589233476515!2d57.63509869402749!3d19.626687365729367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e82898ae59cbf79%3A0x98f6a2d4936ddeb7!2zQWxzZWViIGNpdHkgb3B0aWNzIGR1cW0sINio2LXYsdmK2KfYqiDZhdiv2YrZhtipINin2YTYs9mK2KggLNin2YTYr9mC2YU!5e0!3m2!1sen!2sin!4v1752488729236!5m2!1sen!2sin"
    },
    {
      title: "AL AMRI OPTICALS FALAJ",
      description: "Discover our stylish and durable glasses, designed for comfort and everyday wear.",
      image: "images/home/shop-3.jpg",
      shopMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930012.0909846475!2d55.39743237812499!3d24.42094019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8b49486cbe9267%3A0x5f043833596173cd!2zQUwgQU1SSSBPUFRJQ0FMUyBGQUxBSiDYp9mE2LnYp9mF2LHZiiDZhNmE2YbYuNin2LHYp9iqINmB2YTYrCDYp9mE2YLYqNin2KbZhA!5e0!3m2!1sen!2sin!4v1752489257237!5m2!1sen!2sin"
    },
    {
      title: "FAISAL AL AMRI SEEB",
      description: "Discover our stylish and durable glasses, designed for comfort and everyday wear.",
      image: "images/home/shop-1.jpg",
      shopMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7307.766644378105!2d58.17384154615411!3d23.680130214873536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de56e5c9e4fcd%3A0x7413683de6670087!2sFAISAL%20AL%20AMRI%20SEEB!5e0!3m2!1sen!2sin!4v1752489327228!5m2!1sen!2sin"
    },
    {
      title: "ZAIN OPTICALS SEEB SOUQ",
      description: "Discover our stylish and durable glasses, designed for comfort and everyday wear.",
      image: "images/home/shop-2.jpg",
      shopMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8949157189954!2d58.18457307621172!3d23.679715678718765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de5aa4c950f15%3A0x55c34eb145546b26!2sZAIN%20OPTICALS%20SEEB!5e0!3m2!1sen!2sin!4v1754484126158!5m2!1sen!2sin"
    },
  ]
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;
  disablePrev = true;
  disableNext = false;
  public isBrowser: boolean;
  private boundCheckScroll: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef 
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.boundCheckScroll = this.checkScrollButtons.bind(this);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      setTimeout(() => {
        this.checkScrollButtons();
        this.scrollContainer.nativeElement.addEventListener('scroll', this.boundCheckScroll);
      }, 0);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.scrollContainer) {
      this.scrollContainer.nativeElement.removeEventListener('scroll', this.boundCheckScroll);
    }
  }

  checkScrollButtons(): void {
    if (!this.isBrowser) return;

    const el = this.scrollContainer.nativeElement;
    
    this.disablePrev = el.scrollLeft < 1;

    // Check if at the end (with a small buffer for precision)
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
    this.disableNext = atEnd;

    this.cdr.detectChanges();
  }

  scrollNext(): void {
    if (!this.isBrowser) return;
    const el = this.scrollContainer.nativeElement;
    const scrollAmount = el.clientWidth * 0.6; 
    el.scrollLeft += scrollAmount;
  }

  scrollPrev(): void {
    if (!this.isBrowser) return;
    const el = this.scrollContainer.nativeElement;
    const scrollAmount = el.clientWidth * 0.6;
    el.scrollLeft -= scrollAmount;
  }

  mapUrl = "";
  openMap(url: string): void {
    if (this.isBrowser) {
      this.mapUrl = url;
    }
  }
}