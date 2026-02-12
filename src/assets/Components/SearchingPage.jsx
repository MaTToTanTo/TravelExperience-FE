import Navbar from "./Navbar"
import { Box, Icon, IconButton, MenuItem, Select, Typography } from "@mui/material"
import "../css/SearchingPage.css"
import { useState,useEffect,useContext,useReducer } from "react"
import CloseIcon from '@mui/icons-material/Close';

function SearchingPage(){
    const [filterList, setFilterList] = useState(["Location","Activity","Price"]);
    const handleRemoveFilter = (filter) => {
        setFilterList((prevFilters) => prevFilters.filter((f) => f !== filter));//restituisce un nuovo oggetto senza l'elemento impostato(filter in questo caso)
      }

    const [orderBy, setOrderBy] = useState("");
    return(
        <>
        <Box className="searching-page-background">
            <Box className="searching-content-container">
                <Box className="searching-header">
                    <Box className="searching-title-box">
                        <Typography className="searching-title">Risultati della ricerca</Typography>
                    </Box>
                    <Box className="searching-filter-header-box">
                        <Box className="left-filter-header"
                        sx={{display:{ xs:"none", sm:"flex", md:"flex", lg:"flex"}}}>
                            {filterList.map((filter) => (
                                <Box className="filter-item" key={filter}
                                    value={filter}
                                    >
                                    <Typography className="filter-item-text">{filter}</Typography>
                                    <IconButton className="filter-item-close-button">
                                        <CloseIcon sx={{fontSize:"medium",color:"rgb(200, 42, 42)"}}
                                        onClick={() => handleRemoveFilter(filter)}
                                        />
                                    </IconButton>
                                </Box>     
                            ))}
                            
                        </Box>
                        <Box className="right-filter-header">
                            <Select className="select-orderFor"
                            variant="outlined"
                            label="Ordina per"
                            value={orderBy}
                            onChange={(e) => setOrderBy(e.target.value)} 
                            sx={{
                                "& .MuiSelect-icon": {
                                color: "rgb(79, 78, 78)",
                                },}}
                            displayEmpty>
                            <MenuItem value="" disabled>
                            Ordina per
                            </MenuItem>  
                            <MenuItem className="item" value="Valutazione">Valutazione</MenuItem>  
                            <MenuItem className="item" value="Popolarità">Popolarità</MenuItem>   
                            <MenuItem className="item" value="Prezzo">Prezzo</MenuItem>                 
                            </Select>
                        </Box>   
                    </Box>
                </Box>
                
                <Box className="searching-body">
                    <Box className="searching-empty-left-box"/>
                    <Box className="searching-results">
                    </Box>
                    
                </Box>
            </Box>

        </Box>
        
        </>
    )
}
export default SearchingPage