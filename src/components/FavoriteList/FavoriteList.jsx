import { useSelector } from "react-redux";
import FavoriteItem from "../FavoriteItem/FavoriteItem.jsx";
import { ImageList } from '@mui/material';

function FavoriteList() {
   
  const favoriteList = useSelector((store) => store.favoriteReducer);
  console.log("this is favoriteList:", favoriteList);
  return (
    <ImageList sx={{}} cols={3} rowHeight={164}>
      {favoriteList.map((favGif, i) => (
        <FavoriteItem key={i} favGif={favGif} />
      ))}
    </ImageList>
  );
} // end FavoriteList

export default FavoriteList;
