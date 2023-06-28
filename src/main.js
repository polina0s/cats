import './styles/main.scss';
import * as bootstrap from 'bootstrap';
import { Api } from '../src/api/api';
import { Card } from './components/card/card';

const api = new Api();
const row = document.querySelector('.row');

api.getCatImages().then((result) => {
  for (let i = 0; i < result.length; i++) {
    let src = result[i];
    const card = new Card(src);
    row.append(card.element);
  }
});
