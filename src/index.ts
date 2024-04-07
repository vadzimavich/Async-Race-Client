import './index.html';
import './style.css';

import Race from './modules/race';

function app() {
  const race = new Race();
  race.renderGarage();
}
app();