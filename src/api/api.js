class Api {
  constructor() {
    this.link = import.meta.env.VITE_LINK;
    this.key = import.meta.env.VITE_KEY;
  }

  async getCats() {
    const response = await fetch(`${link}${key}`);
    const json = await response.json();
    return json;
  }
}
