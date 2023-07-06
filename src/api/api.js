class Api {
  constructor() {
    this.link = import.meta.env.VITE_LINK;
    this.key = import.meta.env.VITE_KEY;
    this.path = 'images/search?';
  }

  async getCatImages(page = 0, limit = 9) {
    const response = await fetch(
      `${this.link}${this.path}limit=${limit}&api_key=${this.key}&page=${page}`
    );
    const json = await response.json();

    return json;
  }

  async getCatById(id) {
    const response = await fetch(`${this.link}images/${id}`);
    const json = await response.json();

    return json;
  }
}

const api = new Api();
export { api };
