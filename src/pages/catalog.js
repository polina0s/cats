import { api } from '../api/api';
import { Card } from '../components/card/card';
import { Loader } from '../components/loader/loader';
import { Pagination } from '../components/pagination/pagination';
import { Select } from '../components/select/select';
import { BREEDS_OPTIONS, BREEDS_MAP, BREEDS_KEYS } from '../config/breeds';
import { ORDER_OPTIONS, ORDER_MAP, ORDER_KEYS } from '../config/order';
import queryString from 'query-string';

export class CatalogPage {
  constructor() {
    this.urlSearchParams = new URLSearchParams(location.search);
    this.page = +this.urlSearchParams.get('page') || 1;
    this.breed = this.urlSearchParams.get('breeds') || BREEDS_KEYS.RANDOM;
    this.order = this.urlSearchParams.get('order') || ORDER_KEYS.RANDOM;
    this.name = this.urlSearchParams.get('breedId') || null;

    this.catalogRow = document.querySelector('#catalog-row');
    this.selectContainer = document.querySelector('#select-container');

    this.renderBreedsFilters();
    this.renderOrderFilters();
    this.renderNameList();
    this.renderNavigation();
    this.renderCatalog();
  }

  renderCatalog() {
    const loader = new Loader();

    loader.startLoading(this.catalogRow);
    this.pagination.disablePagination();

    document
      .querySelectorAll('select')
      .forEach((el) => el.setAttribute('disabled', 'disabled'));

    api
      .getCats({
        page: this.page,
        limit: 12,
        breed: BREEDS_MAP.get(this.breed),
        order: ORDER_MAP.get(this.order),
        breedId: this.name,
      })
      .then((result) => {
        result.forEach((catImage) => {
          const card = new Card({
            id: catImage.id,
            url: catImage.url,
            link: `/cat/${catImage.id}`,
          });
          this.catalogRow.append(card.element);
        });

        if (result.length >= 12) {
          this.pagination.activatePagination();
        }
      })
      // .catch(() => {
      //   alert('reload page');
      // })
      .finally(() => {
        loader.endLoading();
      });
  }

  handleChange({
    page = this.page,
    breed = this.breed,
    order = this.order,
    breedId = this.name,
  }) {
    const query = queryString.stringify(
      { page: page, breeds: breed, order: order, breedId: breedId },
      { skipNull: true },
    );

    history.replaceState(null, null, `?${query}`);
    this.page = page;
    this.catalogRow.innerHTML = '';
    this.renderCatalog();
  }

  setDefaultPage() {
    this.page = 1;
    this.pagination.setPage(1);
  }

  renderNavigation() {
    this.pagination = new Pagination({
      defaultPage: this.page,
      onPageChange: (newPage) => this.handleChange({ page: newPage }),
    });

    document.querySelector('body').append(this.pagination.element);
  }

  renderBreedsFilters() {
    this.breedSelect = new Select({
      onChange: (e) => {
        this.breed = e.target.value;
        this.setDefaultPage();
        this.handleChange({ breed: e.target.value });
      },
      defaultSelected: this.breed,
      options: BREEDS_OPTIONS,
    });

    this.selectContainer.append(this.breedSelect.element);
  }

  renderOrderFilters() {
    this.orderSelect = new Select({
      onChange: (e) => {
        this.order = e.target.value;
        this.setDefaultPage();
        this.handleChange({ order: e.target.value });
      },
      defaultSelected: this.order,
      options: ORDER_OPTIONS,
    });

    this.selectContainer.append(this.orderSelect.element);
  }

  renderNameList() {
    api.getBreedsList().then((result) => {
      this.nameList = new Select({
        onChange: (e) => {
          this.name = e.target.value;
          this.setDefaultPage();
          this.handleChange({ breedId: e.target.value });
        },
        defaultSelected: this.name,
        options: result,
      });

      this.nameList.element
        .querySelector('select')
        .setAttribute('style', 'width: 210px');

      this.selectContainer.append(this.nameList.element);
    });
  }
}
