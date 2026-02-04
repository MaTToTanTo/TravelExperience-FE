
import "../css/LocationCard.css";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

function LocationCard({ location }) {




return (
        <>
         <Box className="location-card-container">
            <Box className="location-image"
            style={{ backgroundImage: `url(${location.imageUrl})` }}>
            <Typography className="location-name">
              {location.name}
            </Typography>
            </Box>
            
            <Box className="location-info">
                <Typography className="location-info-name">{location.name}</Typography>
                
                <Box className="location-info-activities">
                    <Typography className="location-info-activities-number">{location.activities}</Typography>
                    <Typography className="location-info-activities-text">Activities</Typography>
                </Box>
               
                <Box className="location-info-reviews">
                    <Typography className="location-info-reviews-number">{location.reviews}</Typography>
                    <Typography className="location-info-reviews-text">Reviews</Typography>
                </Box>
               
                <Box className="location-info-valuation">
                    <Typography className="location-info-valuation-number">{location.valuation}/5</Typography>
                    <Typography className="location-info-valuation-text">Valuation</Typography>
                </Box>
          </Box>
         </Box>
        </>
    )

}
export default LocationCard;
