import { renderGarage } from './garageComp';
import '../style.css';

export const renderPage = (): void => {
  const appLayout = `
    <main class="container">
      <header class="header">
        <button class="btn garage">To Garage</button>
        <button class="btn winners">To Winners</button>
      </header>
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
    <section class="garage">${renderGarage()}</section>
    <section class="controls">
      <button class="btn race" id="race">Race</button>
      <button class="btn reset" id="reset" disabled>Reset</button>
      <button class="btn generate" id="generate">Generate</button>
    </section>
  </main>
  `;
  const app = document.createElement('div');
  app.innerHTML = appLayout;
  document.body.appendChild(app);
}