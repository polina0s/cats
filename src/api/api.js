import queryString from 'query-string';

class Api {
  constructor() {
    this.link = import.meta.env.VITE_LINK;
    this.key = import.meta.env.VITE_KEY;
    this.path = 'images/search?';
  }

  async getCats(page = 0, limit = 20, breed = null) {
    const query = queryString.stringify(
      { page, limit, has_breeds: breed },
      { skipNull: true }
    );

    const response = await fetch(
      `${this.link}${this.path}${query}&api_key=${this.key}`
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
