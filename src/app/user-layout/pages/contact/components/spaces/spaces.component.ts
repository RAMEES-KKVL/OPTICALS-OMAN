import { Component } from '@angular/core';
import { BackendService } from '../../../../../services/backend.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spaces',
  imports: [CommonModule],
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.css'
})
export class SpacesComponent {
  shops: any[] = []
  
  constructor(private bs: BackendService) {}

  ngOnInit() {
    this.bs.getOutlets().subscribe({
      next: (res) => {
        this.shops = res.data;
      },
      error: () => {}
    })
  }
}