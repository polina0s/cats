export class Loader {
  constructor() {
    this.createLoader();
  }

  createLoader() {
    this.element = document.createElement('div');
    this.element.classList.add('text-center');

    this.element.innerHTML = `
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`;
  }

  startLoading(el) {
    el.append(this.element);
  }

  endLoading() {
    this.element.remove();
  }
}
