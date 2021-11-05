import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function SearchForm() {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        console.log('clicked');
        dispatch({
            type: 'FETCH_RESULTS', payload: searchTerm
        })
        setSearchTerm('');
    } // end handleClick

    return (
        <form onSubmit={handleClick}>
            <div>
                <TextField 
                id="outlined-basic" label="What type of gif?" variant="outlined"
                    type="text"
                    placeholder="Gif type"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button 
                onClick={handleClick}>SEARCH</Button>
                <Button>FAVORITE LIST</Button>
                {/* <SearchIcon
                    fontSize="large"
                    onClick={handleClick}></SearchIcon> */}
            </div>
        </form>
    )
} // end SearchForm

export default SearchForm;
