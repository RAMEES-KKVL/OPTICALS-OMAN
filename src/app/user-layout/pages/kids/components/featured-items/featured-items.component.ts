import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-featured-items',
  imports: [
    CommonModule
  ],
  templateUrl: './featured-items.component.html',
  styleUrl: './featured-items.component.css'
})
export class FeaturedItemsComponent {
  // @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;
  // disablePrev = true;
  // disableNext = false;
  // public isBrowser: boolean;
  // private boundCheckScroll: () => void;

  // constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {
  //   this.isBrowser = isPlatformBrowser(platformId)
  //   this.boundCheckScroll = this.checkScrollButtons.bind(this)
  // }

  // ngAfterViewInit() {
  //   if (this.isBrowser) {
  //     setTimeout(() => {
  //       this.checkScrollButtons()
  //       this.scrollContainer.nativeElement.addEventListener('scroll', this.boundCheckScroll)
  //     }, 0);
  //   }
  // }

  // checkScrollButtons() {
  //   if (!this.isBrowser) return;

  //   const el = this.scrollContainer.nativeElement;
  //   this.disablePrev = el.scrollLeft < 1;

  //   const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
  //   this.disableNext = atEnd;

  //   this.cdr.detectChanges();
  // }

  // scrollNext() {
  //   if (!this.isBrowser) return;

  //   const el = this.scrollContainer.nativeElement;
  //   const scrollAmount = el.clientWidth * 0.3;
  //   el.scrollLeft += scrollAmount;
  // }

  // scrollPrev() {
  //   if (!this.isBrowser) return;

  //   const el = this.scrollContainer.nativeElement;
  //   const scrollAmount = el.clientWidth * 0.3;
  //   el.scrollLeft -= scrollAmount;
  // }

  // ngOnDestroy(): void {
  //   if (this.isBrowser && this.scrollContainer) {
  //     this.scrollContainer.nativeElement.removeEventListener('scroll', this.boundCheckScroll);
  //   }
  // }
}
