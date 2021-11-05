import { useSelector } from "react-redux"
import GiphyItem from "../GiphyItem/GiphyItem"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ImageList } from '@mui/material';
import './SearchList.css';

function SearchList() {
    const giphyList = useSelector((store) => store.searchReducer);

    // console.log('this is giphylist', giphyList);

    return (

        <ImageList sx={{}} cols={3} rowHeight={164}>
            {giphyList.map((gif) => {
                return (
                    <GiphyItem
                        key={gif.id} gif={gif} />
                )
            })}
        </ImageList>
    )

} // end SearchList

export default SearchList;
