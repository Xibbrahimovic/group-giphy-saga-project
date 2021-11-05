import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SearchList from '../SearchList/SearchList';
import SearchForm from '../SearchForm/SearchForm';
import { Container } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import FavoriteList from "../FavoriteList/FavoriteList.jsx";
import { Route, HashRouter as Router, Redirect, Link } from "react-router-dom";

function App(props) {
  const search = useSelector((store) => store.searchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_RESULTS", payload: "funny" }),
    dispatch({ type: "FETCH_FAVORITES" });
  }, []);

  // useEffect(() => {
  //   dispatch({ type: "FETCH_FAVORITES" });
  // }, []);


  return (
    <>
      {/* <div className="header-main">
        <h1>Giphy Search!</h1>
      
      <SearchForm />
      </div>
      <div className="app-main">

        <Container>

          <SearchList />
        </Container>
      </div>
    </> */}

    <Container>
    <Router>
      <div className="header-main">
        <nav>
          <Link to="/search">Search</Link>
          </nav>
          <nav>
          <Link to="/favorites">Favorites</Link>
        </nav>

        <Route exact path="/">
          <Redirect to={{ pathname: "/search" }} />
        </Route>

        <Route path="/search">
          <h1>Giphy Search!</h1>
          <SearchForm />
          <div className="app-main">
          
          <SearchList />
          </div>
        </Route>

        <Route path="/favorites">
          <h1>Giphy Favorites!</h1>
          <FavoriteList />
        </Route>
      </div>
      
    </Router>
      
    </Container>
    </>
  );
}

export default App;
