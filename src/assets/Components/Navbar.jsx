import { use, useEffect,useState,useRef } from "react";
import "../css/Navbar.css";
import { Box, Typography,AppBar,Button,Select, MenuItem,InputBase,IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    const [isHomepage, setIsHomepage] = useState(true);
    const [tempSearch, setTempSearch] = useState("");
    const [search, setSearch] = useState("");
    const inputRef = useRef(null);
    const location = useLocation();//per trovare il path dall'url
    const [language, setLanguage] = useState("Italiano");
    const languageList =["Italiano", "English","French","Japan"]
    

    const HandleLanguage = (e) => {
        setLanguage(e.target.value)
    }

    
    useEffect(() => {
        setIsHomepage(
            location.pathname === "/" || location.pathname === "/homepage"
        );
    }, [location.pathname]);

    const HandleSearchRequest = (e) => {
        if ( e.key === "Enter" || e.type === "Click" && tempSearch.length > 3 )
          {
            setSearch(tempSearch);
            inputRef.current?.blur();
            e.preventDefault();
        } 
    }    

return (
        <>
        <AppBar position="fixed" className="navbar">
            <Box className="navbar-container">
                <Box className="navbar-logo">
                    <Typography component={Link} to="/" className="navbar-logo-text">
                        LOGO
                    </Typography> 
                    <Typography component={Link} to="/linkprovaactivitypage" sx={{color:"white"}}>paginaProva</Typography>            
                </Box>
                {/* barra di ricerca solo se non si è in homepage*/}
                {!isHomepage && (
                    <Box className="nav-search-box">                             
                    <InputBase className="nav-search-input"
                     placeholder='...find your destination'
                     inputRef={inputRef}
                     value={tempSearch}
                     onChange={(e) => setTempSearch(e.target.value)}
                     onKeyDown={HandleSearchRequest}       
                    />
                    <IconButton className="nav-search-button"
                    onClick={HandleSearchRequest}>              
                    <SearchIcon className="nav-search-icon" />
                    </IconButton>                                  
                    </Box> 
                )}
                <Box className="nav-right-box">
                    <Select className="nav-language"
                        name="Language"
                        variant="outlined"
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            },
                        }}
                        displayEmpty
                        value={language}
                        onChange={HandleLanguage}
                        >
                        {/*value={} onChange={funzione handle}*/} 
                        {languageList.map((option) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>   
                        ))}
                        
                    </Select>

                    <Button className="login-button">
                    {/*onClick={funzione di login}*/}
                     Accedi
                    </Button>


                </Box>
            </Box>
        </AppBar>
        </>
    )
}
export default Navbar;