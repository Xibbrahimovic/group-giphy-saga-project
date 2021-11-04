import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

function App(props) {

  const search = useSelector((store) => store.searchReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({type: 'FETCH_RESULTS', payload: 'funny'})
  }, [])

  //no mans land
  console.log(search);

  return (
    <div>
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;
