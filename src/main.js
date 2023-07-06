import './styles/main.scss';
import { CatalogPage } from './pages/catalog';
import * as bootstrap from 'bootstrap';

import { api } from './api/api';
import Navigo from 'navigo';
class App {
  bootstrap() {
    new CatalogPage();

    const router = new Navigo('/');
  }
}

const app = new App();

document.addEventListener('DOMContentLoaded', () => {
  app.bootstrap();
});
