import { api } from '../api/api';
import { Card } from '../components/card/card';
import { Loader } from '../components/loader/loader';
import { Pagination } from '../components/pagination/pagination';

export class CatalogPage {
  constructor() {
    const urlSearchParams = new URLSearchParams(location.search);
    this.page = +urlSearchParams.get('page') || 1;

    this.catalogRow = document.querySelector('#catalog-row');
    this.renderCatalog();
    this.renderNavigation();
  }

  renderCatalog() {
    const loader = new Loader();

    loader.startLoading(this.catalogRow);

    api
      .getCatImages(this.page)
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          let src = result[i];
          const card = new Card(src);
          this.catalogRow.append(card.element);
        }
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

  renderNavigation() {
    const pagination = new Pagination({
      defaultPage: this.page,
      onPageChange: (newPage) => this.handlePageChange(newPage),
    });

    document.querySelector('body').append(pagination.element);
  }
}
