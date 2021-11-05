import { useState } from "react";
import "./FavoriteItem.css";
import CategoryForm from "../CategoryForm/CategoryForm.js";
import { CardActionArea, CardActions, Button, ImageList} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function FavoriteItem({ favGif }) {
  // variable for displaying gif versus CategoryForm
  const [gifDisplay, setGifDisplay] = useState(true);

  const clickHandler = (e) => {
    // console.dir(e.target);
    // change functionality based on what was clicked
    switch (e.target.tagName) {
      case "IMG":
        // flip the truthyness of imgDisplay
        setGifDisplay(!gifDisplay);
        break;
      case "BUTTON":
        setGifDisplay(!gifDisplay);
        break;
    }
  };
  console.log(gifDisplay);
  return (
    <Card
        className="card"
        sx={{ maxWidth: 345,
        margin: .5 }}>
        <CardActionArea>
          
          {gifDisplay ? 
          <CardMedia
            onClick={clickHandler}
            component="img"
            height="300"
            image={favGif.url}
            alt="green iguana"
          /> :  <CategoryForm favGif={favGif} setGifDisplay={setGifDisplay} /> }
          <CardContent>
            <Typography 
            gutterBottom variant="p" component="div">
              {favGif.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        
      </CardActions>
      </Card>


  );
}
