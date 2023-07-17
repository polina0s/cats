import { api } from '../api/api';
import { Card } from '../components/card/card';
import { Loader } from '../components/loader/loader';
import { Pagination } from '../components/pagination/pagination';
import { Select } from '../components/select/select';

export class CatalogPage {
  constructor() {
    const urlSearchParams = new URLSearchParams(location.search);
    this.page = +urlSearchParams.get('page') || 1;

    this.catalogRow = document.querySelector('#catalog-row');
    this.selectContainer = document.querySelector('#select-container');

    this.renderFilters();
    this.renderCatalog();
    this.renderNavigation();
  }

  renderCatalog() {
    const loader = new Loader();

    loader.startLoading(this.catalogRow);

    api
      .getAllCats(this.page)
      .then((result) => {
        result.forEach((catImage) => {
          const card = new Card({
            id: catImage.id,
            url: catImage.url,
            link: `/cat/${catImage.id}`,
          });
          this.catalogRow.append(card.element);
        });
      })
      .finally(() => {
        loader.endLoading();
      });
  }

  handlePageChange(newPage) {
    history.replaceState(null, null, `?page=${newPage}`);
    this.catalogRow.innerHTML = '';
    this.renderCatalog();
  }

  handleFilterChange(value) {
    
  }

  renderNavigation() {
    const pagination = new Pagination({
      defaultPage: this.page,
      onPageChange: (newPage) => this.handlePageChange(newPage),
    });

    document.querySelector('body').append(pagination.element);
  }

  renderFilters() {
    const breedSelect = new Select({
      onChange: (e) => console.log(e, 123443243),
      defaultSelected: 2,
      options: [
        { value: 1, label: 'random' },
        { value: 2, label: 'with breed' },
        { value: 3, label: 'without breed' },
      ],
    });

    this.selectContainer.append(breedSelect.element);
  }
}
