import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

const CategoryForm = ({favGif}) => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState({
        id: newGif.id,
        category_id: 1,
    })

    const categoryChange = (event, ) => {
        setCategory({...category, property: event.target.value})
    }

    const updateCategory = event => {
        event.preventDefault();
        dispatch({ type: 'UPDATE_FAVORITE', payload: category})
    }

    return (
        <div>
            <form onSubmit={updateCategory}>
                <select name="category">
                    <option hidden="hidden">Default</option>
                    
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
                <input type='submit' value='Change Category' />
            </form>
        </div>
    )

}


export default CategoryForm;