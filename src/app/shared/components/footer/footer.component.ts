import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackendService } from '../../../services/backend.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email: string = '';
  isSubmitting = false;
  message: string = '';
  constructor(private bs: BackendService) {}

  subscribe() {
    if (!this.email) return;

    this.isSubmitting = true;
    this.message = '';

    this.bs.subscribeNewsletter(this.email).subscribe({
      next: () => {
        this.message = 'Subscribed successfully!';
        setTimeout(() => this.message = '', 3000);
        this.email = '';
        this.isSubmitting = false;
      },
      error: () => {
        this.message = 'Subscription failed. Try again.';
        setTimeout(() => this.message = '', 3000);
        this.isSubmitting = false;
      }
    });
  }
}