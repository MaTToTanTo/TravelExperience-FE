import { useEffect, useRef, useState,useContext } from 'react'
import { Box,Paper,Button,Typography, InputBase, IconButton, Divider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import '../css/HomePage.css'
import MainSearch from './MainSearch';
import LocationCard from './LocationCard';
import ActivityCard from './ActivityCard';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import { dataContext } from '../Store/DataContent';

function HomePage() {
  
  const {activityList, setActivityList,user, setUser} = useContext(dataContext);
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
              id : 1234,
              name: "Lorem ipsum dolor sit amet, consectetur",
              imageUrl: "/img3.jpg",
              price: 0,
              valuation: 0,
              hours: 0,
              reviews: 0,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
              details :["Item","Item","Item","Item","Item","Item"],
    };
            
  const bestActivityArray = Array.from({length: 8}, () => ({...bestActivityItem}));
  
  useEffect(()=>{
    const GetMainDestination = async () =>{
      //const data = await HttpGet("/maindestinations"); da sistemare con la chiamata giusta
      //setMainDest(data);
    };
    const GetBestActivity = async () =>{
      //const data = await HttpGet("/bestactivities"); da sistemare con la chiamata giusta
      //setActivityList(data);
    };
    GetMainDestination();
    GetBestActivity();
  },[]);

  return (
    <>
      
        <Box className="background-homepage">
          
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
            <Divider />
            <Typography className="name-section">
            Best Experiences
            </Typography>
             {/*MIGLIORI ESPERIENZE*/}
            <Box className="box-best-activity">
            {/*mettere card Esperienze*/}
              {bestActivityArray.map((activity) => (//cambiare in activityList dal context quando sarà popolato con la chiamata al backend
                <Link key={activity.id} 
                to={"/activity/${activity.id}"}>{/*key va messo sul primo elemento del map, quindi Link e all'interno del Link c'è il componente card*/}
                <ActivityCard
                activity={activity} />          
                 
                 </Link>
              ))}
            </Box>
            <Divider />
          </Box>
          
          <Box className="footer">  
          </Box>
          
        </Box>
      
      
        
      
    </>
  )
}

export default HomePage
