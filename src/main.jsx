
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CookiesProvider } from 'react-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom';
//mport userContext from './context/userContext.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  //<userContext.Provider>
  <BrowserRouter>
  <CookiesProvider defaultSetOptions={{ path: '/' }}>

  <App />

  </CookiesProvider>
    
    </BrowserRouter>
    //</userContext.Provider>
  
)
