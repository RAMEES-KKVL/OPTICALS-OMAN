import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { SafeUrlPipe } from '../../../../../shared/pipes/safeUrl.pipe';
import { BackendService } from '../../../../../services/backend.service';

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
  shops: any[] = []
  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;
  disablePrev = true;
  disableNext = false;
  public isBrowser: boolean;
  private boundCheckScroll: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private bs: BackendService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.boundCheckScroll = this.checkScrollButtons.bind(this);
  }

  ngOnInit() {
    this.bs.getOutlets().subscribe({
      next: (res) => {
        this.shops = res.data;
      },
      error: () => {}
    })
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