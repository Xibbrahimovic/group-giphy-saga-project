import { useState } from "react";
import "./FavoriteItem.css";
import CategoryForm from "../CategoryForm/CategoryForm.js";

export default function FavoriteItem({ favGif }) {
  // variable for displaying gif versus CategoryForm
  const [gifDisplay, setGifDisplay] = useState(true);

  const clickHandler = (e) => {
    // console.dir(e.target);
    // change functionality based on what was clicked
    switch (e.target.tagName) {
      case "IMG":
        // flip the truthyness of imgDisplay
        setGifDisplay(!gifDisplay);
        break;
      case "BUTTON":
        setGifDisplay(!gifDisplay);
        break;
    }
  };
  console.log(gifDisplay);
  return (
    <div>
      {gifDisplay ? (
        <img src={favGif.url} onClick={clickHandler} className="gif" />
      ) : (
        <div className="form-holder">
          <CategoryForm favGif={favGif} setGifDisplay={setGifDisplay} />
        </div>
      )}
    </div>
  );
}
