import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { CountriesListComponent } from "./countries-list/countries-list.component";

@NgModule({
  declarations: [CountriesListComponent],
  imports: [CommonModule, MatListModule, RouterModule],
  exports: [CountriesListComponent]
})
export class SharedModule {}
