import queryString from 'query-string';

class Api {
  constructor() {
    this.link = import.meta.env.VITE_LINK;
    this.key = import.meta.env.VITE_KEY;
    this.path = 'images/search?';
  }

  async getAllCats(page = 0, limit = 9, breed = null) {
    const query = queryString.stringify(
      { page, limit, breed: 1 },
      { skipNull: true }
    );

    console.log(query);

    const response = await fetch(
      `${this.link}${this.path}limit=${limit}&api_key=${this.key}${breed}&page=${page}`
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
