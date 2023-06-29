export class Card {
  constructor(src) {
    this.createCard(src);
  }

  createCard(src) {
    this.element = document.createElement('div');
    this.element.classList.add('card');
    this.element.classList.add('text-center');
    this.element.style.width = '18rem';
    // this.element.style.height = 'auto';

    this.element.innerHTML = `
    <img src='${src}' class='card-img-top card-img-size' alt='cat' />
    <div class='card-body'>
      <a href='#' class='btn btn-dark'>
        See cat
      </a>
    </div>    
    `;
  }
}
