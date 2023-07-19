import { api } from '../api/api';
import { Card } from '../components/card/card';
import { Loader } from '../components/loader/loader';
import { Pagination } from '../components/pagination/pagination';
import { Select } from '../components/select/select';
import { BREEDS_OPTIONS, BREEDS_MAP, BREEDS_KEYS } from '../config/breeds';
import queryString from 'query-string';

export class CatalogPage {
  constructor() {
    this.urlSearchParams = new URLSearchParams(location.search);
    this.page = +this.urlSearchParams.get('page') || 1;
    this.breed = this.urlSearchParams.get('breeds') || BREEDS_KEYS.RANDOM;

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
      .getCats(this.page, 12, BREEDS_MAP.get(this.breed))
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
    const query = queryString.stringify(
      { page: newPage, breeds: this.breed },
      { skipNull: true }
    );

    history.replaceState(null, null, `?${query}`);
    this.catalogRow.innerHTML = '';
    this.renderCatalog();
  }

  handleFilterChange(value) {
    this.breed = value;
    // console.log(value, this.breed);
    const query = queryString.stringify(
      { page: 1, breeds: value },
      { skipNull: true }
    );

    history.replaceState(null, null, `?${query}`);
    this.catalogRow.innerHTML = '';
    this.renderCatalog();
    this.pagination.setPage(1);
  }

  renderNavigation() {
    this.pagination = new Pagination({
      defaultPage: this.page,
      onPageChange: (newPage) => this.handlePageChange(newPage),
    });

    document.querySelector('body').append(this.pagination.element);
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
