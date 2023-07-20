export class Select {
  constructor({ defaultSelected, onChange, options }) {
    this.options = options;
    this.selected = defaultSelected;
    this.onChange = onChange;
    this.createSelect();
  }

  createSelect() {
    this.element = document.createElement('div');
    this.element.classList.add('select');

    this.element.innerHTML = `
    <select class="form-select mb-4 me-2" style="width: 170px" aria-label="Default select example">
      ${this.options
        .map((obj) => {
          const isSelected = this.selected === obj.value;
          return `<option value=${obj.value} ${isSelected ? 'selected' : ''}>${
            obj.label
          }</option>`;
        })
        .join('')}
    </select>
    `;

    this.select = this.element.querySelector('select');
    this.select.addEventListener('change', (e) => {
      this.selected = +e.target.value;
      this.onChange?.(e);
      this.createSelect();
    });
  }

  disableSelect() {
    this.element.querySelector('select').setAttribute('disabled', 'disabled');
  }

  activateSelect() {
    this.element.querySelector('select').removeAttribute('disabled');
  }
}
