import { Api } from '../api/api';
import { Card } from '../components/card/card';

export class CatalogPage {
  constructor() {
    this.catalogRow = document.querySelector('#catalog-row');
    this.renderCatalog();
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

  showLoader() {
    // insert loader into catalog row
  }
}
