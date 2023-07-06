import './styles/main.scss';
import { CatalogPage } from './pages/catalog';
import * as bootstrap from 'bootstrap';

import { api } from './api/api';
class App {
  bootstrap() {
    new CatalogPage();
  }
}

const app = new App();

document.addEventListener('DOMContentLoaded', () => {
  app.bootstrap();
});
