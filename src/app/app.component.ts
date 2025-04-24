import { Component } from '@angular/core';
import { CompanyCardComponent } from "./core/components/company-card";
import { Header } from "./core/components/header";
import { Footer } from "./core/components/footer";

@Component({
  selector: 'app-root',
  imports: [CompanyCardComponent, Header, Footer],
  template: `
    <cua-header />
    <main class="main">
      <company-card />
    </main>
    <cua-footer />
  `,
  host: {
    class: 'cua-ui'
  }
})
export class AppComponent {
}
