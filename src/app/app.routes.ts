import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: "",
      loadComponent: () =>import("./user-layout/pages/home/home.component").then((m) => m.HomeComponent)
    },
];
