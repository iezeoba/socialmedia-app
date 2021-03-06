import React from "react";
import { Container } from "semantic-ui-react"; // wrapping with <Container/> same as adding className"ui container"//
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/Auth";
import AuthRoute from "./util/AuthRoute";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
