import { useDispatch } from "react-redux";
import { useState } from "react";

const CategoryForm = ({ favGif, setGifDisplay }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    id: favGif.id,
    category_id: 1,
  });

  const categoryChange = (event) => {
    console.log(event.target.value);
    setCategory({ ...category, category_id: event.target.value });
  };

  const updateCategory = (event) => {
    event.preventDefault();
    console.log(category);
    dispatch({ type: "UPDATE_FAVORITE", payload: category });
    setGifDisplay(true);
  };

  return (
    <div>
      <form onSubmit={updateCategory}>
        <div>
          <select onChange={categoryChange} name="category">
            <option hidden="hidden">Category</option>
            <option value={2}>Funny</option>

            <option value={3}>Cohort</option>

            <option value={4}>Cartoon</option>

            <option value={5}>NSFW</option>

            <option value={6}>Meme</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Submit Change" />
        </div>
        <div>
          <button
            onClick={() =>
              dispatch({ type: "DELETE_FAVORITE", payload: newGif.id })
            }
          >
            Remove Favorite
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
