import { useState,useEffect,useContext } from "react";
import "../css/ActivityPage.css";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import TopActivityContent from "./TopActivityContent";
import { Typography,Box } from "@mui/material";
import BookingStickyForm from "./BookingStickyForm";
import InfoActivityContent from "./InfoActivityContent";
import { dataContext } from "../Store/DataContent";


function ActivityPage(){
    const {activityList} = useContext(dataContext);
    const {id} = useParams(); //per trovare id
   // const activity = activityList.find(activity => activity.id === id); //prende l'activity singola nella lista activity sul context tramite id(getById da implementare sul context)questo per aprire la pagina del dettaglio dall'id dell'url passato dal map delle activity della mainpage*/

    /*useEffect(()=>{
        if(!activity){
            getactivityById(id);//fetch dell'activity tramite id da implementare sul context, se non c'è già nella lista activity del context, altrimenti prendere direttamente l'activity dalla lista activity del context tramite id
        }
    },[id]);*/

    const activityItem = {
              id : 1234,
              title: "Lorem ipsum dolor sit amet, consectetur",
              imageUrl: "/parisimage.jpg",
              country: "Country",
              location: "Location",
              price: 35,
              valuation: 8,
              hours: 8,
              reviews: 211150,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
              information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.",
              details :["Item","Item","Item","Item","Item","Item"],
            };
              

    return (
        <>

        <Box className="page-container">
            <Box className="box-content">
                <Box className="top-content">
                    <TopActivityContent activityItem={activityItem} />
                </Box>

                <Box className="sticky-wrapper">
                    <BookingStickyForm />
                </Box>

                <Box className="middle-content">
                    <InfoActivityContent activityItem={activityItem} />

                </Box>
                <Box className="bottom-content">

                </Box>
            </Box>
        </Box>       
      </>
    )
}
export default ActivityPage