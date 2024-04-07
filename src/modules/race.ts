import API from './api';
import Page from '../components/page';
import Service from './service';

class Race {
  api: API;

  page: Page;

  service: Service;
  
  body: HTMLElement;

  constructor() {
    this.api = new API();
    this.page = new Page();
    this.service = new Service();
    this.body = document.querySelector('body') as HTMLElement;
  }

  renderGarage() {
    this.api.carsGet(this.service.pageNumber).then((data) => {
      const garage = this.page.createGarage(data);
      const controls = this.page.createControls();
      const main = this.page.createMain();
      main.append(this.page.createHeader(), this.page.createGenerator(), garage, controls);
      this.body.append(main);
      this.startEvents();
    });
  }

  startEvents() {
    const createNameInput = document.querySelector('#create-name') as HTMLInputElement;
    const createColorInput = document.querySelector('#create-name') as HTMLInputElement;
    const updateNameInput = document.querySelector('#create-name') as HTMLInputElement;
    const updateColorInput = document.querySelector('#create-name') as HTMLInputElement;
    this.body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target && target.classList.contains('.btn.create')) {
        this.service.createCar(target, createNameInput.value, createColorInput.value);
      }
      if (target && target.classList.contains('.btn.update')) {
        this.service.updateCar(target, updateNameInput .value, updateColorInput.value, this.service.id);
      }
    });
  }
}

export default Race;