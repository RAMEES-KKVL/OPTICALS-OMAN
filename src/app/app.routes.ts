import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
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
    path: "new-arrivals",
    loadComponent: () =>import("./user-layout/pages/new-arrivals/new-arrivals.component").then((m) => m.NewArrivalsComponent)
  },
  {
    path: "kids",
    loadComponent: () =>import("./user-layout/pages/kids/kids.component").then((m) => m.KidsComponent)
  },
  {
    path: "men",
    loadComponent: () =>import("./user-layout/pages/men/men.component").then((m) => m.MenComponent)
  },
  {
    path: "women",
    loadComponent: () =>import("./user-layout/pages/women/women.component").then((m) => m.WomenComponent)
  },
];
