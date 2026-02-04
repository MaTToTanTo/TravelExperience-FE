import { useEffect, useRef, useState } from 'react'
import { Box,Paper,Button,Typography, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import '../css/HomePage.css'
import MainSearch from './MainSearch';
import LocationCard from './LocationCard';
import ActivityCard from './ActivityCard';
import Navbar from './Navbar';

function HomePage() {
  
  const [mainDest,  setMainDest] = useState([]);
  const [bestActivity, setBestActivity] = useState([]);
  const mainDestItem = {
              name: "Location",
              imageUrl: "/parisimage.jpg",
              activities: 0,
              reviews: 0,
              valuation: 0
              };
  const mainDestArray = Array.from({length: 8}, () => ({...mainDestItem}));

  const bestActivityItem = {
              name: "Lorem ipsum dolor sit amet, consectetur",
              imageUrl: "/parisimage.jpg",
              price: 0,
              valuation: 0,
              hours: 0,
              reviews: 0,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris."
              };
  const bestActivityArray = Array.from({length: 8}, () => ({...bestActivityItem}));
  
  useEffect(()=>{
    const GetMainDestination = async () =>{
      //const data = await HttpGet("/maindestinations"); da sistemare con la chiamata giusta
      //setMainDest(data);
    };
    const GetBestActivity = async () =>{
      //const data = await HttpGet("/bestactivities"); da sistemare con la chiamata giusta
      //setBestActivity(data);
    };
    GetMainDestination();
    GetBestActivity();
  },[]);

  return (
    <>
      
        <Box className="background-homepage">
          <Navbar />{ /*inserire componente Navbar*/}
          
          <Box className="main-search-box">
            <MainSearch />{ /*inserire componente MainSearch*/}           
          </Box>
          
          <Box className="content">
            <Typography className="name-section">
             {/*PRINCIPALI DESTINAZIONI*/}
            Principali Destinazioni
            </Typography>
            <Box className="box-main-destination">
             {/*mettere card Main*/}
             {mainDestArray.map((location, index) => (
              <LocationCard key={index} location={location} />
             ))}
             
            </Box>
            <Typography className="name-section">
            Best Experiences
            </Typography>
             {/*MIGLIORI ESPERIENZE*/}
            <Box className="box-best-activity">
            {/*mettere card Esperienze*/}
              {bestActivityArray.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </Box>
          </Box>
          
          <Box className="footer">  
          </Box>
          
        </Box>
      
      
        
      
    </>
  )
}

export default HomePage
