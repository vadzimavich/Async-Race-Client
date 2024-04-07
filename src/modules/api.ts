import { Car } from '../interfaces/interfaces';
import Page from '../components/page';

class API {
  private BASE_URL = 'http://127.0.0.1:3000';

  async carsGet(page = 1, limit = Page.pagesLimit) {
    const response: Car[] = await fetch(`${this.BASE_URL}/garage?_page=${page}&_limit=${limit}`).then(data => data.json());
    return response;
  }

  async carGet(id: string) {
    const response: Car = await fetch(`${this.BASE_URL}/garage/${id}`).then((data) => data.json());
    return response;
  }

  async carPost(name: string, color: string) {
    const response: Car = await fetch(`${this.BASE_URL}/garage/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        color: color,
      })
    }).then((data) => data.json());
    return response;
  }

  async carDelete(id: string) {
    const response = await fetch(`${this.BASE_URL}/garage/${id}`, {
      method: 'DELETE',
    }).then((data) => data.json());
    return response;
  }

  async carPut(name: string, color: string, id: string) {
    const response: Car = await fetch(`${this.BASE_URL}/garage/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        color: color,
      })
    }).then((data) => data.json());
    return response;
  }

}

export default API;