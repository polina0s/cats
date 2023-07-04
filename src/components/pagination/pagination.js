import { api } from '../../api/api';

const pageChange = (page) => {
  const url = new URLSearchParams();

  url.append('page', page);
  api.getCats(page);
};

class Pagination {
  constructor({ onPageChange, currentPage = 0 }) {
    this.currentPage = currentPage;
  }

  render() {
    //
  }

  goToNextPage() {
    onPageChange(this.newPage);
  }

  goToPrevPage() {}

  setPage() {}
}

class Page {
  constructor() {
    new Pagination({
      onPageChange,
      currentPage: new URLSearchParams().get('page'),
    });
  }
}
