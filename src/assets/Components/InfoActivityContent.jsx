import "../css/InfoActivityContent.css"
import { useState } from "react"
import {Box,Typography,Divider} from "@mui/material";
import { Description } from "@mui/icons-material";

function InfoActivityContent({activityItem}){
    const [activity,setActivity] = useState({});

    

    return (
        <>
        <Box className="container">
            <Box className="left-body">
                <Box className="description-box">
                    <Typography className="description">
                        {activityItem.description}
                    </Typography>
                </Box>
                <Divider />

                <Box className="info-box">
                    <Typography className="info-title">Informazioni</Typography>
                    <Typography className="info-body">
                    {activityItem.information}
                    </Typography>
                </Box>
                <Divider/>
                <Box className="detail-box">
                    <Typography className="info-title">Dettagli</Typography>
                    <Box className="detail-body"> 
                        {activityItem.details.map((item,index)=>(
                            <li key={index}>
                            <Divider sx={{borderStyle:"dashed",ml:-2.5}}/>    
                            <Typography className="detail-item">
                                {item+index}
                            </Typography>
                        </li>
                        
                        ))}              
                    </Box>
                </Box>
                <Divider/>
                <Box className="reviews-box">
                    <Typography>Reviews box</Typography>

                </Box>
            </Box>
            <Box className="right-empty-body"/>
            
        </Box>
        </>
    )
}
export default InfoActivityContent
