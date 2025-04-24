import { Component, resource } from "@angular/core";
import { CompanyCardComponent } from "../../core/components/company-card";
import { Company } from "../../core/types/company";
@Component({
  selector: 'home',
  template: `
  <section
      class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
    @for (company of companies.value(); track company.name) {
      <company-card [company]="company" />
    }
    </section>
  `,
  styles: ``,
  imports: [CompanyCardComponent],
})
export default class Home {
  companies = resource<Company[], unknown>({
    loader: async () => {
      const response = await fetch('/data/companies.json');
      return response.json();
    },
    defaultValue: []
  })
}