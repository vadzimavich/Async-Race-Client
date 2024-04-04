import './index.html';
import './style.css';
import { renderPage } from './components/pageComp';

renderPage();

fetch('http://127.0.0.1:3000/garage')
  .then((data) => data.json())
  .then(console.log);