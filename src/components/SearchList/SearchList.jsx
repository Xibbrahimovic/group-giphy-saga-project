import { useSelector } from "react-redux";
import GiphyItem from "../GiphyItem/GiphyItem";
function SearchList() {
  const giphyList = useSelector((store) => store.searchReducer);

  // console.log('this is giphylist', giphyList);

  return (
    <div>
      {giphyList.map((gif) => {
        return <GiphyItem key={gif.id} gif={gif} />;
      })}
    </div>
  );
} // end SearchList

export default SearchList;
