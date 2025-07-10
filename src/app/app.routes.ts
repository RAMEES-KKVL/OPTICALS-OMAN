import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "about-us",
    loadComponent: () =>import("./user-layout/pages/home/home.component").then((m) => m.HomeComponent)
  },
  {
    path: "",
    loadComponent: () =>import("./user-layout/pages/about/about.component").then((m) => m.AboutComponent)
  },
];
