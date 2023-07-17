import { api } from '../api/api';
import { Card } from '../components/card/card';
import { Loader } from '../components/loader/loader';
import { Pagination } from '../components/pagination/pagination';
import { Select } from '../components/select/select';
import { BREEDS_OPTIONS, BREEDS_MAP } from '../config/breeds';

export class CatalogPage {
  constructor() {
    const urlSearchParams = new URLSearchParams(location.search);
    this.page = +urlSearchParams.get('page') || 1;
    this.breed = null;

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
      .getCats(this.page, 12, this.breed)
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
    this.breed = BREEDS_MAP.get(value);

    history.replaceState(null, null, `?page=1&${value}`);
    this.catalogRow.innerHTML = '';
    this.renderCatalog();
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
      onChange: (e) => this.handleFilterChange(e.target.value),
      defaultSelected: this.breed,
      options: BREEDS_OPTIONS,
    });

    this.selectContainer.append(breedSelect.element);
  }
}
