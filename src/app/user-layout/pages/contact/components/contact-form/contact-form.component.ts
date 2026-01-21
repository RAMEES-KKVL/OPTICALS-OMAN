import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { BackendService } from '../../../../../services/backend.service';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  contactFormData = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
  };

  successResponse = false;
  errorResponse = false;
  isLoading = false;

  constructor(private bs: BackendService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.isLoading = true;

    this.bs.contactFormSubmission(this.contactFormData).subscribe({
      next: () => {
        this.isLoading = false;
        this.successResponse = true;
        this.errorResponse = false;
        form.resetForm();
      },
      error: () => {
        this.isLoading = false;
        this.successResponse = false;
        this.errorResponse = true;
      },
    });
  }

  close() {
    this.successResponse = false;
    this.errorResponse = false;
  }
}
