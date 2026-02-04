import React, { useEffect } from 'react'
import { Box,Paper,Button,Typography, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import '../css/MainSearch.css'
import { useRef, useState } from 'react'
import { Transform } from '@mui/icons-material';

function MainSearch() {

  const imageList = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg'
  ];
  const [search, setSearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const inputRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 7000);//return del nuovo index ogni 7 secondi
    return () => clearInterval(interval);//resetta l'intervallo quando useEffect si smonta
    }, [imageList.length]);
  
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
        <Box className="background">
          <Box className="carousel">
            <Box className="image-box"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
            {imageList.map((image, index) => (
              <Box
                key={index}
                className="image-slide"
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
            </Box>
          
             
            <IconButton className="prev-icon"
              onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length)}
              />
             <Box className="central-box">
              <Box className="Headline-container">
              <Typography className="image-script">  
               INSERT YOUR CATCHY HEADLINE HERE         
              </Typography>
              </Box>
             
              <Box className="search-box">                             
                <InputBase className="search-input"
                     placeholder='...find your destination'
                     inputRef={inputRef}
                     value={tempSearch}
                     onChange={(e) => setTempSearch(e.target.value)}
                     onKeyDown={HandleSearchRequest}       
                 />

               <IconButton className="search-button"
                    onClick={HandleSearchRequest}>              
                    <SearchIcon className="search-icon" />
               </IconButton>
                                   
               </Box>         
             </Box>
            
            <IconButton className="next-icon"
              onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length)}
            /> 
        </Box>
        </Box>
    </>
  )
}
export default MainSearch