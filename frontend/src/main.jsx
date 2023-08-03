import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
