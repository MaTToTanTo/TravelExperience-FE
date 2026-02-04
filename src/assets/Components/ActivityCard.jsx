import { useState } from "react";
import "../css/ActivityCard.css";
import { Box, Typography } from "@mui/material";

function ActivityCard({ activity }) {

return (
        <>
        <Box className="activity-card-container">
            <Box className="card-front">
                <Box className="activity-image"
                    style={{ backgroundImage: `url(${activity.imageUrl})` }}>
                </Box>
                <Box className="activity-front-info">
                    <Box className="box-front-name">
                    <Typography className="activity-front-name">
                        {activity.name}
                    </Typography>
                    </Box>
                    <Box className="box-front-info">
                        <Box className="activity-front-valRevhour" >
                            <Typography className="activity-front-valuation">
                            {activity.valuation}/5
                            </Typography>
                            <Typography className="activity-front-reviews">
                            ({activity.reviews})
                            </Typography>
                            <Typography className="activity-front-hours">
                            {activity.hours} Hours
                            </Typography>
                        </Box>
                        <Box className="activity-front-price-box">
                            <Typography className="activity-front-price">
                            {activity.price}€
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="card-activity-back">
                    <Typography className="activity-name-back">
                        {activity.name}
                    </Typography>
                    <Box className="activity-valRev-back">
                        <Typography className="activity-valuation-back">
                            {activity.valuation}/5
                        </Typography>
                        <Typography className="activity-reviews-back">
                            {activity.reviews} reviews
                        </Typography>
                    </Box>
                    <Typography className="activity-description-back">
                        {activity.description}
                    </Typography>
            </Box>
        </Box>
        
    </>
)
}
export default ActivityCard;