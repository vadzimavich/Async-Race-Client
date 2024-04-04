import API from './api';
import Page from '../components/page';
class Race {
    constructor() {
        this.page = new Page();
        this.api = new API();
        this.body = document.querySelector('body');
    }
    renderGarage() {
        this.api.getCars().then((data) => {
            const garage = this.page.createGarage(data);
            const main = this.page.createMain();
            main.append(this.page.createHeader(), this.page.createGenerator(), garage);
            this.body.append(main);
        });
    }
}
export default Race;
