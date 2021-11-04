import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

const CategoryForm = ({taco}) => {
    const dispatch = useDispatch();
    const [flipGif, setFlipGif] = useState(false)

    const toggleDropdown = () => {
        setFlipGif(!flipGif)
    }

    const categoryChange = (event, property) => {
        
    }

    const updateCategory = event => {
        event.preventDefault();
        dispatch({ type: 'UPDATE_FAVORITE', payload: taco.category_id})
    }

    return (
        <div>


            <img 
                src={taco.url}
                alt={taco.title}
                onClick={toggleDropdown}
            />

            <div>
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
            </div>

            {flipGif ? }
        </div>
    )

}


export default CategoryForm;