export class Pagination {
  constructor({ defaultPage = 1, onPageChange }) {
    this.currentPage = defaultPage;
    this.onPageChange = onPageChange;
    this.element = document.createElement('nav');
    this.render();
  }

  render() {
    const prevPage = this.currentPage - 1;
    const isPrevDisabled = prevPage < 1;

    // this.element.classList.add('mb-4', 'mt-4');
    this.element.innerHTML = `
      <ul class="pagination justify-content-center">
        <li class="page-item ${
          isPrevDisabled ? 'disabled' : ''
        }"><a class="page-link" data-page="${
      this.currentPage - 1
    }" href="#">Previous</a></li>

        ${
          isPrevDisabled
            ? ''
            : `<li class="page-item"><a class="page-link" data-page="${
                this.currentPage - 1
              }" href="#">${this.currentPage - 1}</a></li>`
        }
    
        <li class="page-item active"><a class="page-link" data-page="${
          this.currentPage
        }" href="#">${this.currentPage}</a></li>
        <li class="page-item"><a class="page-link" data-page="${
          this.currentPage + 1
        }" href="#">${this.currentPage + 1}</a></li>
        

        ${
          isPrevDisabled
            ? `
            <li class="page-item">
              <a
                class="page-link"
                data-page="${this.currentPage + 2}"
                href="#"
              >
                ${this.currentPage + 2}
              </a>
            </li>
          `
            : ''
        }

        <li class="page-item"><a class="page-link" data-page="${
          this.currentPage + 1
        }" href="#">Next</a></li>

      </ul>
    `;

    const links = this.element.querySelectorAll('a');

    links.forEach((link) =>
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const newPage = Number(e.target.getAttribute('data-page'));
        this.setPage(newPage);
      })
    );
  }

  setPage(newPageNumber) {
    this.currentPage = newPageNumber;
    this.onPageChange?.(newPageNumber);
    this.render();
  }
}
