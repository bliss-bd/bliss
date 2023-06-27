import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'swiper/css';
import "swiper/css/bundle";
import reportWebVitals from "./reportWebVitals";
import Usercontexts from "./Contexts/UserContexts/UserContexts";
import 'react-photo-view/dist/react-photo-view.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import 'react-day-picker/dist/style.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Usercontexts>
        <App />
      </Usercontexts>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
