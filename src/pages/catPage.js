import { api } from '../api/api';
import { Loader } from '../components/loader/loader';
import { BigCard } from '../components/card/bigCard';
export class CatPage {
  constructor({ id }) {
    this.id = id;
    this.catalogRow = document.querySelector('#catalog-row');

    this.renderCard();
  }

  renderCard() {
    const loader = new Loader();

    loader.startLoading(this.catalogRow);

    api
      .getCatById(this.id)
      .then((result) => {
        const breed = result.breeds[0];
        console.log(breed);
        const card = new BigCard({
          url: result.url,
          name: breed.name,
          wiki: breed.wikipedia_url,
        });
        this.catalogRow.append(card.element);
      })
      .finally(() => loader.endLoading());

    //  api
    //    .getCatImages(this.page)
    //    .then((result) => {
    //      result.forEach((catImage) => {
    //        const card = new Card({
    //          id: catImage.id,
    //          url: catImage.url,
    //          link: `/cat/${catImage.id}`,
    //        });
    //        this.catalogRow.append(card.element);
    //      });
    //    })
    //    .finally(() => {
    //      loader.endLoading();
    //    });
  }
}
