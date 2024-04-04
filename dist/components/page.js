import { renderCarImage, renderFinishImage } from './svg';
class Page {
    createMain() {
        const main = document.createElement('main');
        main.classList.add('container');
        return main;
    }
    createHeader() {
        const header = document.createElement('header');
        header.classList.add('header');
        header.innerHTML = `
      <header class="header">
        <button class="btn garage">To Garage</button>
        <button class="btn winners">To Winners</button>
      </header>
    `;
        return header;
    }
    createGenerator() {
        const generator = document.createElement('section');
        generator.classList.add('generator');
        generator.innerHTML = `
      <section class="generator">
        <div class="generator-create">
          <input 
            type="text" 
            class="generator-text"
            id="create-name">
            required
          >
          <input 
            type="color" 
            class="generator-color"
            id="create-color"
            value="#ffffff"
          >
          <button class="btn create" type="submit">Create</button>
        </div>
        <div class="generator-update">
          <input 
            type="text" 
            class="generator-text"
            id="update-name">
            required
          >
          <input 
            type="color" 
            class="generator-color"
            id="update-color"
            value="#ffffff"
          >
          <button class="btn update">Update</button>
        </div>
      </section>
    `;
        return generator;
    }
    createGarage(data) {
        const garage = document.createElement('section');
        garage.classList.add('garage');
        let cars = '';
        const carsCount = data.length;
        data.forEach((car) => {
            cars += this.createCar(car.name, car.color, car.id, car.isEngineStarted);
        });
        garage.innerHTML = `
    <h1 class="garage-header-cars-counter">Garage (${carsCount} cars)</h2>
    <p class="garage-header-page-counter">Page #{pageCount}</p>
    <ul class="garage-list">
      <li class="garage-list-item">${cars}</li>
    </ul>
    `;
        return garage;
    }
    createCar(name, color, id, isEngineStarted) {
        const car = `
    <div class="garage-list-item-header">
      <button class="btn select" id="select-${id}">Select</button>
      <button class="btn remove" id="remove-${id}">Remove</button>
      <span class="garage-list-item-car-name">${name}</span>
    </div>
    <div class="garage-list-item-race">
      <button class="btn start" id="start-${id} ${isEngineStarted ? 'disabled' : ''}">A</button>
      <button class="btn stop" id="stop-${id} ${isEngineStarted ? 'disabled' : ''}">B</button>
      <div class="garage-list-item-car-image" id="car-image-${id}">
        ${renderCarImage(color)}
      </div>
      <div class="garage-list-item-finish id="finish-${id}">
        ${renderFinishImage()}
      </div>
    </div>
    `;
        return car;
    }
    createControls() {
        const controls = document.createElement('section');
        controls.classList.add('controls');
        controls.innerHTML = `
      <section class="controls">
      <button class="btn race" id="race">Race</button>
      <button class="btn reset" id="reset" disabled>Reset</button>
      <button class="btn generate" id="generate">Generate</button>
    </section>
    `;
        return controls;
    }
}
export default Page;
