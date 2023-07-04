import { api } from '../api/api';
import { Card } from '../components/card/card';
import { Loader } from '../components/loader/loader';
import { Pagination } from '../components/pagination/pagination';

export class CatalogPage {
  constructor() {
    const urlSearchParams = new URLSearchParams(location.search);
    this.page = +urlSearchParams.get('page') || 1;

    this.catalogRow = document.querySelector('#catalog-row');

    this.loader = new Loader();
    this.renderCatalog();
    this.renderNavigation();
  }

  renderCatalog() {
    this.loader.startLoading(this.catalogRow);

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
        this.loader.endLoading();
      });
  }

  renderNavigation() {
    const pagination = new Pagination({
      defaultPage: this.page,
      onPageChange: (newPage) => console.log(newPage),
    });

    document.querySelector('body').append(pagination.element);
  }
}
