import { render } from 'react-dom';
import App from "./App";
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';


const app = document.getElementById("app");
render(  
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
 
 app);
