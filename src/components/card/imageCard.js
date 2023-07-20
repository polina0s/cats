export class ImageCard {
  constructor(src) {
    this.src = src;

    this.createImageCard(src);
  }

  createImageCard() {
    this.element = document.createElement('div');
    this.element.style =
      'max-width: 1120px; margin: 0 auto; text-align: center';

    this.element.innerHTML = `
    <div class="card">
      <img src="${this.src}" style="max-height: 750px; object-fit: contain" class="card-img-top p-2" alt="...">
      <div class="card-body">
        <button onclick="history.back();" type="button" class="btn btn-info" >back</button>
      </div>
    </div>
    `;
  }
}
