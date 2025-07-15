import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "new-arrivals",
    loadComponent: () =>import("./user-layout/pages/home/home.component").then((m) => m.HomeComponent)
  },
  {
    path: "about-us",
    loadComponent: () =>import("./user-layout/pages/about/about.component").then((m) => m.AboutComponent)
  },
  {
    path: "contact-us",
    loadComponent: () =>import("./user-layout/pages/contact/contact.component").then((m) => m.ContactComponent)
  },
  {
    path: "",
    loadComponent: () =>import("./user-layout/pages/new-arrivals/new-arrivals.component").then((m) => m.NewArrivalsComponent)
  },
];
