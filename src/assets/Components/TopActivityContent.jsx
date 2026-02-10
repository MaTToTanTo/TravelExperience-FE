import { useState } from "react";
import "../css/TopActivityContent.css"
import {Box, Typography,IconButton} from "@mui/material"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


function TopActivityContent(){
    
    const [currentImageIndex,setCurrentImageIndex] = useState(0);

    const activityItem = {
              title: "Lorem ipsum dolor sit amet, consectetur",
              imageUrl: "/parisimage.jpg",
              country: "Country",
              location: "Location",
              price: 0,
              valuation: 0,
              hours: 0,
              reviews: 0,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris."
              };
              const imageList = [
                    '/img1.jpg',
                    '/img2.jpg',
                    '/img3.jpg',
                    '/img1.jpg',
                    '/img2.jpg',
                    '/img3.jpg'
                ];
    const[mainImage,setMainImage] = useState(imageList[0]);
    
    
    return (
        <>
        <Box className="content-container">
          <Box className="header-top">
            <Box className="header-path-box">
                <Typography className="path-text">{activityItem.country}</Typography>
                <Typography className="path-text">{activityItem.location}</Typography>
            </Box>
            <Box className="header-title-box">
                <Box className="header-left-info">                   
                    <Typography className="activity-title">{activityItem.title}</Typography>                    
                    <Box className="header-information">
                        <Typography className="activity-valuation">{activityItem.valuation}/5</Typography>
                        <Typography className="activity-reviews">{activityItem.reviews} reviews</Typography>
                        <Typography className="activity-hours">{activityItem.hours} hours</Typography>
                    </Box>
                </Box>
                <Box className="header-right-info">
                    <Box className="header-price">
                        <Typography className="pre-price">da</Typography>
                        <Typography className="activity-price">{activityItem.price}€</Typography>
                    </Box>
                            
                </Box>
            </Box>
          </Box>
          <Box className="header-image-container">
            <Box className="left-image-box">
                <Box className="main-image"
                 style={{ backgroundImage : `url(${mainImage})`}}>

                </Box>
                <Box className="secondary-image-box">
                
                    <IconButton className="prev-icon"
                    onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length)}
                    >
                    <ArrowBackIosNewOutlinedIcon />
                    </IconButton>
                    <IconButton className="next-icon"
                    onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1 + imageList.length) % imageList.length)}
                    >
                    <ArrowForwardIosOutlinedIcon />
                    </IconButton>
                    <Box
                    className="secondary-image-track"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >   
                    {imageList.map((image, index) => (
                    <Box
                        key={index}
                        className="secondary-image"
                        onClick={() => setMainImage(image)}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    ))}
                    </Box>
                    
                </Box>
            
            </Box>
            <Box className="right-image-box-empty"/>
          </Box>
        </Box>
        </>
    )
}
export default TopActivityContent