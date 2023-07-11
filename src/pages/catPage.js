import { api } from '../api/api';
import { Loader } from '../components/loader/loader';
import { BreedCard } from '../components/card/breedCard';
import { ImageCard } from '../components/card/imageCard';
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
        if (result.breeds) {
          const breed = result.breeds[0];
          const card = new BreedCard({
            url: result.url,
            name: breed.name,
            wiki: breed.wikipedia_url,
            adaptibility: breed.adaptability,
            description: breed.description,
            childFriendly: breed.child_friendly,
            temperament: breed.temperament,
            dogFriendly: breed.dog_friendly,
            strangerFriendly: breed.stranger_friendly,
            health: breed.health_issues,
            intelligence: breed.intelligence,
            lifeSpan: breed.life_span,
            origin: breed.origin,
            socialNeeds: breed.social_needs,
          });
          this.catalogRow.append(card.element);
        } else {
          const card = new ImageCard(result.url);
          this.catalogRow.append(card.element);
        }
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
