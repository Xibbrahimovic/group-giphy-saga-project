import {useDispatch} from 'react-redux';

function GiphyItem ({gif}) {
    const dispatch = useDispatch();

    return (
        <div>
            <p>{gif.title}</p>
            <img src={gif.images.fixed_height.url} alt="" />
            <button 
            onClick={() => dispatch({type: 'ADD_FAVORITE', 
            payload:{
                title: gif.title,
                url: gif.images.fixed_height.url
            }})}
            >LOVE THIS</button>
        </div>
    )
} // end GiphyItem

export default GiphyItem;