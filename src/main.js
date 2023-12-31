import './styles/main.scss';
import { CatalogPage } from './pages/catalog';
import { CatPage } from './pages/catPage';
import Navigo from 'navigo';
class App {
  bootstrap() {
    const router = new Navigo('/');

    router.on('/', () => {
      new CatalogPage();
    });

    router.on('/cat/:id', function (match) {
      const id = match.data.id;
      new CatPage({ id: id });
    });

    router.resolve();
  }
}

const app = new App();

document.addEventListener('DOMContentLoaded', () => {
  app.bootstrap();
});
