import React from 'react';
import {useState} from "react"
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FunctionsIcon from '@mui/icons-material/Functions';
import ScienceIcon from '@mui/icons-material/Science';
import finalHistoryScore from "./History.js";
import finalMathScore from "./Math.js";
import finalScienceScore from "./Science.js";

export default function Footer({ showHistory, showScience, showMath, alertUser }) {

    const [topic, setTopic] = useState(0);
    // this function asks the user to confirm the topic change so they know they are going to lose their progress
    function alertUser() {
        return window.confirm("Are you sure you would like to continue to a different section? You will lose your current progress for this section.")
    }
    return (
        <div className="footer-container">
            <BottomNavigation className="footer"
                showLabels
                value={topic}
                onChange={(topic) => {
                    if (finalHistoryScore || finalMathScore || finalScienceScore === false) {
                        //if the user clicks true
                        if (alertUser()) {
                            setTopic(topic);
                            //the index refers to the position in the material ui bottom navigation
                            if (topic === 0) {
                                showHistory();
                            } else if (topic === 1) {
                                showMath();
                            } else {
                                showScience();
                            }
                        }
                    }
                }}
            >
                <BottomNavigationAction className="footer-icon" label="History" icon={<MenuBookIcon />} />
                <BottomNavigationAction className="footer-icon" label="Math" icon={<FunctionsIcon />} />
                <BottomNavigationAction className="footer-icon" label="Science" icon={<ScienceIcon />} />
            </BottomNavigation>
        </div>
    )
}