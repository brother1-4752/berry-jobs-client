import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import client from "./client.ts";
import { ApolloProvider } from "@apollo/client/react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
