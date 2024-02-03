import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./features/store";
import { Auth0Provider } from "@auth0/auth0-react";
// import { useAuth0 } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-3nxrsxc3aepz5nz4.us.auth0.com"
    clientId="fw95hByXiSfFeA8H0sYA7pudsKnUDJq3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);

reportWebVitals();
