"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderGarage = void 0;
const carComp_1 = require("./carComp");
require("../style.css");
const renderGarage = () => `
    <h1 class="garage-header-cars-counter">Garage (${store.carsCounter} cars)</h2>
    <p class="text">Page #${store.carsPageCounter}</p>
    <ul class="garage-list">
      <li class="garage-list-item">${(0, carComp_1.renderCar)(car)}</li>
    </ul>
`;
exports.renderGarage = renderGarage;
