/**
 * class Select
 *
 * options = [{value, label}, {value: 1, label: with breed}]
 * defaultSelected = undefined || value
 *
 * [{value: 1, label: odin}, {value: 2, label: two}]
 * defaultSelected = 2
 * onChange
 */

class Select {
  constructor({ defaultSelected }) {
    this.selected = defaultSelected;
    this.createSelect();
  }

  createSelect() {
    this.element = document.createElement('div');
    this.element.classList.add('select');

    this.element.innerHTML = `
    <select class="form-select mb-4" style="width: 170px" aria-label="Default select example">
      <option value="1">random</option>
      <option value="2">with breed</option>
      <option value="3">without breed</option>
    </select>
    `;

    this.select = this.element.querySelector('select');
    this.select.addEventListener('change', (e) => console.log(e.target.value));
  }
}

const select = new Select();
export { select };
