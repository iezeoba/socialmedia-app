import React from "react";
import ReactDOM from "react-dom";
import ApolloProvider from "./ApolloProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(ApolloProvider, document.getElementById("root"));
//***********************************************//
//rendering ApolloProvider as a component wrapped with <React.StrictMode> as below threw error//
//research why?//solution: render with a curly bracket {} instead of as a component </>//
// ReactDOM.render(
//   <React.StrictMode>{ApolloProvider}</React.StrictMode>, //right//
//   <React.StrictMode><ApolloProvider/></React.StrictMode>, //wrong!//
//   document.getElementById("root")
// );
//**********************************************//

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
