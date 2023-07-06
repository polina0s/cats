import './styles/main.scss';
import { CatalogPage } from './pages/catalog';
import { CatPage } from './pages/catPage';
import * as bootstrap from 'bootstrap';

import { api } from './api/api';
import Navigo from 'navigo';
class App {
  bootstrap() {
    const router = new Navigo('/');

    router.on('/', () => {
      new CatalogPage();
    });

    router.on('/cat/:id', function (match) {
      // console.log(match);
      const id = match.data.id;
      new CatPage({ id: id });
      api.getCatById(id).then((a) => console.log(a));

      // console.log(id);
    });

    router.resolve();
  }
}

const app = new App();

document.addEventListener('DOMContentLoaded', () => {
  app.bootstrap();
});
