import {createContext,useReducer} from "react";
import {useState} from "react";

export const dataContext = createContext();

export function DataProvider({children}){

const initialExperience = {
  id: "",
  hostProfileId: "",
  title: "",
  description: "",
  information: "",
  location: "",
  pricePerPerson: 0,
  maxParticipants: 0,
  durationInHours: 0,
  imagesUrls: [],
  rating: 0,
  totalReviews: 0,
  totalBookings: 0,
  createdAt: "" 
};

const emptyUser = {
  id: "",
  username: "",
  email: "",
  createdAt: "",

  travelerProfile: {
    id: "",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    dateOfBirth: "",
    avatarUrl: null,
    bio: null,
    createdAt: "",
    userId: ""
  },

  hostProfile: {
    id: "",
    displayName: "",
    businessName: null,
    country: "",
    city: "",
    avatarUrl: null,
    websiteUrl: null,
    bio: null,
    isVerified: false,
    rating: 0,
    totalReviews: 0,
    createdAt: "",
    userId: ""
  }
};

const [user, setUser] = useState(emptyUser);
const [experience, setExperience] = useState(initialExperience);
const [activityList, setActivityList] = useState([]);



    return(
    <dataContext.Provider value={{experience, setExperience,user, setUser,activityList, setActivityList}}>
        {children}
    </dataContext.Provider>
)

}
