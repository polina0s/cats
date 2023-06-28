export class Api {
  constructor() {
    this.link = import.meta.env.VITE_LINK;
    this.key = import.meta.env.VITE_KEY;
    this.path = 'images/search?';
  }

  // async getCats() {
  //   const response = await fetch(`${this.link}${this.key}`);
  //   const json = await response.json();
  //   console.log(json);
  //   return json;
  // }

  async getCatImages(limit = 20) {
    const response = await fetch(
      `${this.link}${this.path}limit=${limit}&api_key=${this.key}`
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

// https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_jRrBjUtr5PeuLvJzNhxlqawZxVHQNuljJWryTxZaMQ1uyyTefbHVKcnUAzAdebZi
