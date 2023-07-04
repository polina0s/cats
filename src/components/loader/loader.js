export class Loader {
  constructor() {
    this.createLoader();
  }

  createLoader() {
    this.element = document.createElement('div');
    this.element.classList.add('loader-cont');

    this.element.innerHTML = `<img src="../../pics/loader.gif", alt="loading..." class="loader" />`;
  }

  startLoading(el) {
    el.append(this.element);
  }

  endLoading() {
    this.element.remove();
  }
}
