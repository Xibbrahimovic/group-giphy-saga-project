import { useState } from "react";
import { useDispatch } from "react-redux";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    dispatch({
      type: "FETCH_RESULTS",
      payload: searchTerm,
    });
  }; // end handleClick

  return (
    <form>
      <input
        type="text"
        placeholder="Gif type"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleClick}>SEARCH</button>
    </form>
  );
} // end SearchForm

export default SearchForm;
