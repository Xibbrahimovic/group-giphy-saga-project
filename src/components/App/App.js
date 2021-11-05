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

function App(props) {


  const search = useSelector((store) => store.searchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_RESULTS', payload: 'funny' })
  }, [])

  //no mans land
  console.log(search);

  return (
    <>
      <div className="header-main">
        <h1>Giphy Search!</h1>
      
      <SearchForm />
      </div>
      <div className="app-main">

        <Container>

          <SearchList />
        </Container>
      </div>
    </>

  );
}

export default App;
