import { useDispatch } from 'react-redux';
import { useState } from 'react';

const CategoryForm = ({ favGif, setGifDisplay }) => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState({
        id: favGif.id,
        category_id: 1
    })

    const categoryChange = event => {
        setCategory({ ...category, property: event.target.value })
    }

    const updateCategory = event => {
        event.preventDefault();
        dispatch({ type: 'UPDATE_FAVORITE', payload: category })
        setGifDisplay(true)
    }

    return (
        <div>

            <form onSubmit={updateCategory}>
                <div>
                    <select name="category">
                        <option hidden="hidden">Category</option>
                        <option
                            value={2}
                            onChange={categoryChange}>
                            Funny
                        </option>

                        <option
                            value={3}
                            onChange={categoryChange}>
                            Cohort
                        </option>

                        <option
                            value={4}
                            onChange={categoryChange}>
                            Cartoon
                        </option>

                        <option
                            value={5}
                            onChange={categoryChange}>
                            NSFW
                        </option>

                        <option
                            value={6}
                            onChange={categoryChange}>
                            Meme
                        </option>
                    </select>
                </div>
                <div>
                    <input type='submit' value='Submit Change' />
                </div>
                <div>
                    <button onClick={() => dispatch({type: 'DELETE_FAVORITE', payload: newGif.id})}>Remove Favorite</button>
                </div>
            </form>
        </div>
    )

}


export default CategoryForm;