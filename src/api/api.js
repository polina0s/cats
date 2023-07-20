import queryString from 'query-string';

class Api {
  constructor() {
    this.link = import.meta.env.VITE_LINK;
    this.key = import.meta.env.VITE_KEY;
  }

  async getCats({ page = 0, limit = 20, breed = null, order = null }) {
    const query = queryString.stringify(
      { page, limit, has_breeds: breed, order: order },
      { skipNull: true },
    );

    const response = await this.request(`${this.link}images/search?${query}`);
    const json = await response.json();

    return json;
  }

  async getCatById(id) {
    const response = await this.request(`${this.link}images/${id}`);
    const json = await response.json();

    return json;
  }

  async request(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: { ...options?.headers, 'x-api-key': this.key },
    });

    // const response = await fetch(
    //   `${this.link}images/search?${query}&api_key=${this.key}`,
    // );
  }
}

const api = new Api();
export { api };
