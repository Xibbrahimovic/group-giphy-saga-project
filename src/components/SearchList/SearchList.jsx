import { useSelector } from "react-redux"
import GiphyItem from "../GiphyItem/GiphyItem"

function SearchList () {
    const giphyList = useSelector(store => store.searchReducer)
    return (
        {giphyList.map((gif) => {
            return (
                <GiphyItem gif={gif}/>
            )
        })}
    )
} // end SearchList

export default SearchList