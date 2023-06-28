export class Api {
  constructor() {
    this.link = import.meta.env.VITE_LINK;
    this.key = import.meta.env.VITE_KEY;
  }

  // async getCats() {
  //   const response = await fetch(`${this.link}${this.key}`);
  //   const json = await response.json();
  //   console.log(json);
  //   return json;
  // }

  async getCatImages() {
    const response = await fetch(`${this.link}${this.key}`);
    const json = await response.json();

    const images = [];

    for (let i = 0; i < json.length; i++) {
      let obj = json[i];
      images.push(obj.url);
    }

    return images;
  }
}