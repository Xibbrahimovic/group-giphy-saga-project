import { useSelector } from "react-redux";
import FavoriteItem from "../FavoriteItem/FavoriteItem.jsx";

function FavoriteList() {
   
  const favoriteList = useSelector((store) => store.favoriteReducer);
  console.log("this is favoriteList:", favoriteList);
  return (
    <div>
      {favoriteList.map((favGif, i) => (
        <FavoriteItem key={i} favGif={favGif} />
      ))}
    </div>
  );
} // end FavoriteList

export default FavoriteList;
