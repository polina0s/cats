export class BigCard {
  constructor({ url, name, wiki }) {
    this.url = url;
    this.name = name;
    this.wiki = wiki;

    this.createCatCard();
  }

  createCatCard() {
    this.element = document.createElement('div');

    this.element.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${this.url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">This is a cat</p>
            <a href="${this.src}" class="card-link">Image link</a>
            <a href="${this.wiki}" class="card-link">Wikipedia link</a>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
