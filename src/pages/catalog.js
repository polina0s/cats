import { api } from '../api/api';
import { Card } from '../components/card/card';
import { Loader } from '../components/loader/loader';
import { Pagination } from '../components/pagination/pagination';
import { filter } from '../components/filter/filter';
import { doc } from 'prettier';

export class CatalogPage {
  constructor() {
    const urlSearchParams = new URLSearchParams(location.search);
    this.page = +urlSearchParams.get('page') || 1;

    this.catalogRow = document.querySelector('#catalog-row');
    this.filterContainer = document.querySelector('#filter-container');
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
        this.filterContainer.append(filter.element);
      });
  }

  handlePageChange(newPage) {
    history.replaceState(null, null, `?page=${newPage}`);
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
}
