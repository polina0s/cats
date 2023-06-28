import './styles/main.scss';
import * as bootstrap from 'bootstrap';
import { Api } from '../src/api/api';
import { Card } from './components/card/card';

const api = new Api();
const row = document.querySelector('.row');

// api.getCats().then((result) => {
//   let el = result[0];
//   let src = el.url;

//   const card = new Card(src);

//   row.append(card.element);
// });


