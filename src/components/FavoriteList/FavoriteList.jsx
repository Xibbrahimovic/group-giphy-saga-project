import { useSelector } from "react-redux"


function FavoriteList () {
    const favoriteList = useSelector(store => store.favoriteReducer)
    return (
        {favoriteList.map((gif) => {
            return (
                <GiphyItem gif={gif}/>
            )
        })}
    )
} // end FavoriteList