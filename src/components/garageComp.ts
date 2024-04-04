import { renderCar } from "./carComp";
import '../style.css';

export const renderGarage = (): string => `
    <h1 class="garage-header-cars-counter">Garage (${store.carsCounter} cars)</h2>
    <p class="text">Page #${store.carsPageCounter}</p>
    <ul class="garage-list">
      <li class="garage-list-item">${renderCar(car)}</li>
    </ul>
`;

