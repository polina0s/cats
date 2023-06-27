export class Api {
  constructor() {
    this.link = import.meta.env.VITE_LINK;
    this.key = import.meta.env.VITE_KEY;
  }

  async getCats() {
    const response = await fetch(`${this.link}${this.key}`);
    const json = await response.json();
    return json;
  }
}
