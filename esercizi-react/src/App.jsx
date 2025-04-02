import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ShowGithubUsers from "./components/ShowGithubUsers";
import PageNotFound from "./components/PageNotFound";
import GithubUserList from "./components/GithubUserList";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Welcome</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/users/:username">UserGitHub</Link>
          <Link to="/gitHubUsersList">UserGitHubLists</Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Welcome nome={"Antonio"} age={23}></Welcome>}
          ></Route>
          <Route
            path="/counter"
            element={<Counter initialValue={0} incrementAmount={1}></Counter>}
          ></Route>
          <Route
            path="users/:username"
            element={<ShowGithubUsers></ShowGithubUsers>}
          ></Route>
          <Route
            path="/gitHubUsersList"
            element={<GithubUserList></GithubUserList>}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
