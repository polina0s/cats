import { Api } from '../api/api';
import { Card } from '../components/card/card';
import { Loader } from '../components/loader/loader';

export class CatalogPage {
  constructor() {
    this.catalogRow = document.querySelector('#catalog-row');
    this.renderCatalog();
    this.loader = new Loader();
  }

  renderCatalog() {
    const api = new Api();
    const row = document.querySelector('.row');

    api.getCatImages().then((result) => {
      for (let i = 0; i < result.length; i++) {
        let src = result[i];
        const card = new Card(src);
        row.append(card.element);
      }
    });
  }

  // showLoader() {
  //   // insert loader into catalog row
  // }
}
