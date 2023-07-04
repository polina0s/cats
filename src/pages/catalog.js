import { api } from '../api/api';
import { Card } from '../components/card/card';
import { Loader } from '../components/loader/loader';

export class CatalogPage {
  constructor() {
    this.catalogRow = document.querySelector('#catalog-row');
    this.loader = new Loader();
    this.renderCatalog();
  }

  renderCatalog() {
    console.log(this.loader);
    this.loader.startLoading(this.catalogRow);

    api
      .getCatImages()
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
}
