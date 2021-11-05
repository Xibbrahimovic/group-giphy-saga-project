import {useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button, ImageList} from '@mui/material';
import { Margin } from '@mui/icons-material';


function GiphyItem ({gif}) {
    const dispatch = useDispatch();

    return (
       
        <Card
        className="card"
        sx={{ maxWidth: 345,
        margin: .5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={gif.images.fixed_height.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              {gif.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button 
        size="small" 
        color="primary"
        onClick={() => dispatch({type: 'ADD_FAVORITE', 
            payload:{
                title: gif.title,
                url: gif.images.fixed_height.url
            }})}>
          Favorite
        </Button>
      </CardActions>
      </Card>
    )
} // end GiphyItem

export default GiphyItem;