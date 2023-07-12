import { doc } from 'prettier';

class Filter {
  constructor() {
    this.createFilter();
  }

  createFilter() {
    this.element = document.createElement('div');
    this.element.classList.add('filter');

    this.element.innerHTML = `
    <select class="form-select mb-4" style="width: 170px" aria-label="Default select example">
      <option selected>random</option>
      <option value="1">with breed</option>
      <option value="2">without breed</option>
    </select>
    `;

    this.option = document.querySelectorAll('option');
    this.option.forEach((el) => console.log(el));
    // this.option.forEach((el) =>
    //   el.addEventListener('click', () => {
    //     console.log('fghjkl');
    //   })
    // );
  }
}

const filter = new Filter();
export { filter };
