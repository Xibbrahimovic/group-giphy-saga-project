import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

const CategoryForm = ({taco}) => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState({
        id: taco.id,
        category_id: 1,
        title: taco.title,
        url: taco.url
    })

    const categoryChange = (event, property) => {
        setCategory({category, [property]: event.target.value})
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
                    value={taco.category_id}
                    onChange={(event) => categoryChange(event, 2)}>
                    Funny
                    </option>

                    <option 
                    value={taco.category_id}
                    onChange={(event) => categoryChange(event, 3)}>
                    Cohort
                    </option>

                    <option 
                    value={taco.category_id}
                    onChange={(event) => categoryChange(event, 4)}>
                    Cartoon
                    </option>
                    
                    <option 
                    value={taco.category_id}
                    onChange={(event) => categoryChange(event, 5)}>
                    NSFW
                    </option>
                    
                    <option 
                    value={taco.category_id}
                    onChange={(event) => categoryChange(event, 6)}>
                    Meme
                    </option>
                </select>
                <input type='submit' value='Change Category' />
            </form>
        </div>
    )

}


export default CategoryForm;