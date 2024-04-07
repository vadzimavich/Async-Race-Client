import API from './api';
import Page from '../components/page';

class Service {
  api: API;

  page: Page;

  id: string;

  pageNumber: number;

  carNumber: number;

  constructor() {
    this.api = new API();
    this.page = new Page();
    this.id = '';
    this.pageNumber = 1;
    this.carNumber = 1;
  }

  async createCar(btn: HTMLElement, name: string, color: string): Promise<void> {
    const data = await this.api.carPost(name, color);
    this.page.addCar(data.name, data.color, data.id);
    this.updateGarage();
  }

  async updateCar(btn: HTMLElement, name: string, color: string, id: string) {
    if (this.id) {
      this.api
      .carPut(name, color, id)
      .then(() => {
        const car = document.getElementById(id) as HTMLLIElement;
        const carName = car.querySelector('.garage-list-item-car-name') as HTMLSpanElement;
        const carColor = car.querySelector('.car-image-${id}') as HTMLElement;
        carName.textContent = name;
        carColor.style.fill = color;
        });
      this.updateGarage();
    }
  }
  // async deleteCar(item: HTMLElement) {
  //
  
  async updateGarage() {
    const garage = document.querySelector('.garage-list') as HTMLUListElement;
    const page = document.querySelector('.garage-header-page-counter') as HTMLParagraphElement;
    const data = await this.api.carsGet(this.pageNumber);
    garage.innerHTML = '';
    data.forEach((item) => {
      garage.innerHTML += `${this.page.createCar(item.name, item.color, item.id)}`;
    });
    page.innerHTML = `Page #${this.pageNumber}`;
  }

}
export default Service;
