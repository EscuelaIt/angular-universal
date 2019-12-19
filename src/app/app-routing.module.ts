import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  { path: 'country', loadChildren: () => import('./country/country.module').then(m => m.CountryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
