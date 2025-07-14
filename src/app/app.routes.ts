import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "contact-us",
    loadComponent: () =>import("./user-layout/pages/home/home.component").then((m) => m.HomeComponent)
  },
  {
    path: "about-us",
    loadComponent: () =>import("./user-layout/pages/about/about.component").then((m) => m.AboutComponent)
  },
  {
    path: "",
    loadComponent: () =>import("./user-layout/pages/contact/contact.component").then((m) => m.ContactComponent)
  },
];
