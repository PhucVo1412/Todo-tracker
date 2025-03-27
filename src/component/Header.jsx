import React from "react";
import BookIcon from '@mui/icons-material/Book';
import { useState,useEffect } from "react";

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
      }, []);


    return (
    <div className = 'header'> 
        <header  >
            <BookIcon fontSize="small"/>
            TODO TRACKER 
            <div>{currentTime}</div>
        </header>
    </div>)

}

export default Header;