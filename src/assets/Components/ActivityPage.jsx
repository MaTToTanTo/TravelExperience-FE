import { useState } from "react";
import "../css/ActivityPage.css";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import TopActivityContent from "./TopActivityContent";
import { Typography,Box } from "@mui/material";
import BookingStickyForm from "./BookingStickyForm";
import InfoActivityContent from "./InfoActivityContent";


function ActivityPage(){
    /*
    const {id} = useParams(); per trovare id
    const {activity} = getById(id); prende l'activity singola nella lista activity sul context tramite id(getById da implementare sul context)
    questo per aprire la pagina del dettaglio dall'id dell'url passato dal map delle activity della mainpage*/

    const ActivityItem = {
              name: "Lorem ipsum dolor sit amet, consectetur",
              imageUrl: "/parisimage.jpg",
              price: 0,
              valuation: 0,
              hours: 0,
              reviews: 0,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris."
              };

    return (
        <>
        <Navbar/>
        <Box className="page-container">
            <Box className="box-content">
                <Box className="top-content">
                    <TopActivityContent/>
                </Box>

                <Box className="sticky-wrapper">
                    <BookingStickyForm />
                </Box>

                <Box className="middle-content">
                    <InfoActivityContent/>

                </Box>
                <Box className="bottom-content">

                </Box>
            </Box>
        </Box>       
      </>
    )
}
export default ActivityPage