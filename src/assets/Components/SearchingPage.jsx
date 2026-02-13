import Navbar from "./Navbar"
import { Box, Divider, Icon, IconButton, MenuItem, Select, Typography } from "@mui/material"
import "../css/SearchingPage.css"
import { useState,useEffect,useContext,useReducer, use, } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { dataContext } from "../Store/DataContent";
import ActivityCard from "./ActivityCard";
import { Link,useSearchParams } from "react-router-dom";
import FilterForm from "./FilterForm";

function filterReducer(state, action) {
    switch (action.type) {
      case 'CHANGE_FILTER':
        return { ...state, [action.name] : action.value };
        case 'RESET_FILTER':
        return {};
      default:
        return state;
    }
  }

function SearchingPage(){
    const {bestActivityArray} = useContext(dataContext);
    const [filterList, setFilterList] = useState(["Location","Activity","Price"]);
    const [searchParams,setSearchParams] = useSearchParams();

    const [filter, dispatchFilter] = useReducer(filterReducer, {}, () => {
        const obj = {};//inizializzo filter in base ai parametri di ricerca presenti nell'url o vuoto
        for (const [key, value] of searchParams.entries()) {
          obj[key] = value;
        }
        return obj;
      });
    
    
    
      useEffect(() => {
        const params = new URLSearchParams();
        Object.entries(filter).forEach(([key, value]) => {//trasformo filterList in un array con valori stringa per settare searchParams
        if (value !== undefined && value !== "") {
        params.set(key, value); 
        }
        });  
        setSearchParams(params);
        }, [filter]);
    
        const HandleChangeFilters = (e) => {
            const { name, value } = e.target;
            dispatchFilter({ type: 'CHANGE_FILTER', name, value });      
          }
    
    const handleRemoveFilter = (filter) => {
        setFilterList((prevFilters) => prevFilters.filter((f) => f !== filter));//restituisce un nuovo oggetto senza l'elemento impostato(filter in questo caso)
      }
 //impostare la chiamata http con l'useffect ogni volta che cambia orderby oltre che filter
    
 
 //filtri : durata, prezzo, valutazione,reviews
 
 
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
                            name="orderBy"
                            value={filter.orderBy || ""}
                            onChange={(e) => HandleChangeFilters(e)} 
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
                    <Divider className="searching-devider"/>
                </Box>
                
                <Box className="searching-body">
                    <Box className="searching-empty-left-box"
                    sx={{display:{ xs:"none", sm:"none", md:"block", lg:"block"}}}
                    >
                        <FilterForm filter={filter} onChange={HandleChangeFilters} />
                    </Box>
                    <Box className="searching-results">
                        {bestActivityArray.map((activity) => (
                            <Link key={activity.id} 
                            to={`/activity/${activity.id}`}>
                                <ActivityCard activity={activity} />
                            </Link> 
                        ))}
                    </Box>
                              
                </Box>
            </Box>

        </Box>
        
        </>
    )
}
export default SearchingPage