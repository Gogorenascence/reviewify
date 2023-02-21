import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Store } from "./Store";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AuthProviderContainer from "./AuthProviderContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Store>
            <Provider store={store}>
                <AuthProviderContainer />
            </Provider>
        </Store>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
