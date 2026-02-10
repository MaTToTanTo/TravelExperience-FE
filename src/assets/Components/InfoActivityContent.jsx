import "../css/InfoActivityContent.css"
import { useState } from "react"
import {Box,Typography,Divider} from "@mui/material";
import { Description } from "@mui/icons-material";

function InfoActivityContent(){
    const [activity,setActivity] = useState({});

    const exampleActivity = {
        description :"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        information :"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        details :["Item","Item","Item","Item","Item","Item"],
    };
    
    
        

    


    return (
        <>
        <Box className="container">
            <Box className="left-body">
                <Box className="description-box">
                    <Typography className="description">
                        {exampleActivity.description}
                    </Typography>
                </Box>
                <Divider />

                <Box className="info-box">
                    <Typography className="info-title">Informazioni</Typography>
                    <Typography className="info-body">
                    {exampleActivity.information}
                    </Typography>
                </Box>
                <Divider/>
                <Box className="detail-box">
                    <Typography className="info-title">Dettagli</Typography>
                    <Box className="detail-body"> 
                        {exampleActivity.details.map((item,index)=>(
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
