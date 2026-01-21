import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafeUrlPipe } from '../../../../../shared/pipes/safeUrl.pipe';
import { BackendService } from '../../../../../services/backend.service';

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
  locations: any[] = []

  constructor(private bs: BackendService) {}

  ngOnInit() {
    this.bs.getOutlets().subscribe({
      next: (res) => {
        this.locations = res.data;
      },
      error: () => {}
    })
  }
}
