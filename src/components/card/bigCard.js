export class BigCard {
  constructor(src) {
    this.createBigCard(src);
  }

  createBigCard(src) {
    this.element = document.createElement('div');
    this.element.classList.add('bigCard-container');

    this.element.innerHTML = `
    <div class="card text-center" style="width: 45rem">
      <img src="${src}" class="card-img-top" alt="..." />
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
  }
}
