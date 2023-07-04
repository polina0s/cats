class Api {
  constructor() {
    this.link = import.meta.env.VITE_LINK;
    this.key = import.meta.env.VITE_KEY;
    this.path = 'images/search?';
  }

  async getCatImages(limit = 20, page = 0) {
    const response = await fetch(
      `${this.link}${this.path}limit=${limit}&api_key=${this.key}&page=${page}`
    );
    const json = await response.json();

    const images = [];

    for (let i = 0; i < json.length; i++) {
      let obj = json[i];
      images.push(obj.url);
    }

    return images;
  }
}

const api = new Api();
export { api };
