export class BigCard {
  constructor(src) {
    this.body = document.querySelector('body');
    this.createBigCard(src);
  }

  createBigCard(src) {
    this.element = document.createElement('div');
    this.element.classList.add('bigCard-container', 'position-fixed');

    this.element.innerHTML = `
    <div class="card bigCard text-center">
      <img src="${src}" class="card-img-top bigCard-img" alt="..." />
      <div class="card-body">
        <a href="#" class="btn btn-dark"> back </a>
      </div>
    </div>
    `;

    const link = this.element.querySelector('a');
    link.addEventListener('click', () => {
      this.closeCard();
    });
  }

  closeCard() {
    this.element.remove();
    this.body.style.removeProperty('overflow');
  }
}
