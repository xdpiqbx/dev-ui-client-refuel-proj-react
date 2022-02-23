# React App

## Available Scripts

[React](https://reactjs.org/docs/create-a-new-react-app.html)

- create empty gti repo and clone it in project folder
- `npx create-react-app .`
- remove everything unnecessary from the project
- [bootstrap](https://getbootstrap.com/) `npm install bootstrap`
- [React router dom](https://www.npmjs.com/package/react-router-dom) `npm i react-router-dom`
- [reactrouter.com](https://reactrouter.com/)

```js
// add Bootstrap
// add to index.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
```

```js
// add React router dom
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

Пункты меню:

- Заправити авто `RefuelCar`
- Залишок пального `RestOfTheFuel`
- Видати пальне `GiveOutFuel`
- Інфо по авто `InfoAboutCar`
- Інфо по водію `InfoAboutDriver`
- Статистика заправок `RefuelStatistics`
