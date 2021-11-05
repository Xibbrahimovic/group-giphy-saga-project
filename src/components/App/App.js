import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import SearchList from "../SearchList/SearchList";
import SearchForm from "../SearchForm/SearchForm";
import FavoriteList from "../FavoriteList/FavoriteList.jsx";
import { Route, HashRouter as Router, Redirect, Link } from "react-router-dom";

function App(props) {
  const search = useSelector((store) => store.searchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_RESULTS", payload: "funny" });
  }, []);
  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
  }, []);

  //no mans land
  console.log(search);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/search">Search</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>

        <Route exact path="/">
          <Redirect to={{ pathname: "/search" }} />
        </Route>

        <Route path="/search">
          <h1>Giphy Search!</h1>
          <SearchForm />
          <SearchList />
        </Route>

        <Route path="/favorites">
          <h1>Giphy Favorites!</h1>
          <FavoriteList />
        </Route>
      </div>
    </Router>
  );
}

export default App;
