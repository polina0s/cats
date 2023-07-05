import { BigCard } from './bigCard';

export class Card {
  constructor(src) {
    this.createCard(src);
  }

  createCard(src) {
    this.element = document.createElement('div');

    this.element.classList.add('col-xxl-3');
    this.element.classList.add('col-md-4');
    this.element.classList.add('col-sm-4');
    // this.element.classList.add('col-xs-6');
    this.element.classList.add('mb-4');

    this.element.innerHTML = `
    <div class='card text-center'>
      <img src='${src}' class='card-img-top card-img-size' alt='cat' />
      <div class='card-body'>
        <a href='#' class='btn btn-dark'>
          See cat
        </a>
      </div>
    </div>      
    `;

    const link = this.element.querySelector('a');
    link.addEventListener('click', () => {
      const bigCard = new BigCard(src);
      this.body = document.querySelector('body');
      this.body.append(bigCard.element);
    });
  }
}
