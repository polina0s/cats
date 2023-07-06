export class Card {
  constructor({ url, id, link }) {
    this.url = url;
    this.id = id;
    this.link = link;

    this.createCard();
  }

  createCard() {
    this.element = document.createElement('div');

    this.element.classList.add('col-xxl-3');
    this.element.classList.add('col-md-4');
    this.element.classList.add('col-sm-4');
    // this.element.classList.add('col-xs-6');
    this.element.classList.add('mb-4');

    this.element.innerHTML = `
    <div class='card text-center'>
      <img src='${this.url}' class='card-img-top card-img-size' alt='cat' />
      <div class='card-body'>
        <a href='${this.link}' class='btn btn-dark' data-navigo>
          See cat
        </a>
      </div>
    </div>      
    `;
  }
}
