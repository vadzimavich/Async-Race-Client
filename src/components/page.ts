import { Car } from '../interfaces/interfaces';
import { renderCarImage, renderFinishImage } from '../assets/svg';

class Page {
  static pagesLimit = 10;
  
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
        <button class="btn togarage">To Garage</button>
        <button class="btn towinners">To Winners</button>
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
            id="create-name"
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
            id="update-name"
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

  createGarage(data: Car[]) {
    const garage = document.createElement('section');
    garage.classList.add('garage');
    let cars = '';
    const carsCount = data.length;
    data.forEach((car) => {
      cars += this.createCar(car.name, car.color, car.id);
    });
    garage.innerHTML = `
    <h1 class="garage-header-cars-counter">Garage (${carsCount} cars)</h2>
    <p class="garage-header-page-counter">Page #{Service.pageNumber}</p>
    <ul class="garage-list">
      ${cars}
    </ul>
    `;
    return garage;
  }   

  createCar(name: string, color: string, id: number) {
    const car = `
    <li class="garage-list-item">
      <div class="garage-list-item-header">
        <button class="btn select" id="select-${id}">Select</button>
        <button class="btn remove" id="remove-${id}">Remove</button>
        <span class="garage-list-item-car-name">${name}</span>
      </div>
      <div class="garage-list-item-race">
        <button class="btn start" id="start-${id}}">A</button>
        <button class="btn stop" id="stop-${id}}">B</button>
        <div class="garage-list-item-car-image" id="car-image-${id}">
          ${renderCarImage(color)}
        </div>
        <div class="garage-list-item-finish id="finish-${id}">
          ${renderFinishImage()}
        </div>
      </div>
    </li>
    `;
    return car;
  }

  addCar(name: string, color: string, id: number) {
    const garage = document.querySelector('.garage-list') as HTMLUListElement;
    garage.innerHTML += this.createCar(name, color, id);
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