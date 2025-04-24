import { Component, model } from "@angular/core";

@Component({
  selector: "search-company",
  template: `
    <section class="mb-16 text-center">
      <h2 class="mb-6 text-5xl font-bold text-[#dd0031]">Discover Companies Using Angular</h2>
      <p class="mx-auto mt-0 mb-10 text-xl max-w-[800px] text-[#282828] dark:text-[#e1e1e1]">
        A curated directory of companies leveraging Angular to build amazing
        products
      </p>
      <input
        class="px-6 py-4 outline outline-gray-400 dark:outline-gray-700 w-full text-lg transition-all border-[none] duration-[0.2s] ease-[ease] max-w-[500px] rounded-[30px] text-[#282828] dark:text-[#e1e1e1]"
        type="search"
        placeholder="Search companies..."
        [value]="searchQuery()"
        (input)="onSearchInput($event)"
      />
    </section>
  `,
})
export class SearchCompany {
  searchQuery = model('');

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }
}