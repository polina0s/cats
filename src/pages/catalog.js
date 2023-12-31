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
    const parsedQueryParams = queryString.parse(location.search);
    this.page = parsedQueryParams.page || 1;
    this.breed = parsedQueryParams.breeds || BREEDS_KEYS.RANDOM;
    this.order = parsedQueryParams.order || ORDER_KEYS.RANDOM;
    this.name = parsedQueryParams.breedId || null;

    this.catalogRow = document.querySelector('#catalog-row');
    this.selectContainer = document.querySelector('#select-container');

    this.renderBreedsFilters();
    this.renderOrderFilters();
    this.renderNavigation();
    this.renderNameList(this.renderCatalog.bind(this));
  }

  renderCatalog() {
    const loader = new Loader();

    loader.startLoading(this.catalogRow);
    this.pagination.disablePagination();
    this.disableSelects();

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
      .catch(() => {
        alert('Reload page');
      })
      .finally(() => {
        loader.endLoading();
        this.activateSelects();
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

  renderNameList(cb) {
    api.getBreedsList().then((result) => {
      let options = [{ value: 'all', label: 'All breeds' }, ...result];
      this.nameList = new Select({
        onChange: (e) => {
          this.name = e.target.value === 'all' ? null : e.target.value;

          this.setDefaultPage();
          this.handleChange({ breedId: this.name });
        },
        defaultSelected: this.name,
        options: options,
      });

      this.nameList.element
        .querySelector('select')
        .setAttribute('style', 'width: 210px');

      this.selectContainer.append(this.nameList.element);

      cb?.();
    });
  }

  disableSelects() {
    this.breedSelect.disableSelect();
    this.orderSelect.disableSelect();
    this.nameList.disableSelect();
  }

  activateSelects() {
    this.breedSelect.activateSelect();
    this.orderSelect.activateSelect();
    this.nameList.activateSelect();
  }
}
