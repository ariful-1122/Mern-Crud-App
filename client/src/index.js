import react from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import App from './component/App.js';
import { Provider } from 'react-redux';
import store from './redux/Store';
import 'react-toastify/dist/ReactToastify.css'



ReactDOM.render(

   <Provider store={store}>
      <App />
   </Provider>

   , document.getElementById('root')
)