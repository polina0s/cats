export class Loader {
  constructor() {
    this.createLoader();
  }

  createLoader() {
    this.element = document.createElement('div');
    this.element.classList.add('text-center', 'spinner-container');

    this.element.innerHTML = `
    <div class="spinner-border m-5" style="width: 5rem; height: 5rem;" role="status">
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
