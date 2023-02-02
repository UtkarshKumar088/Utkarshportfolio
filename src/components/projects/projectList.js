import React, { useState } from 'react';


//import images
import sb from "../../img/cr3.png";
//import todo from "../../img/td.png";
import cr from "../../img/cr1.png";
import ed from "../../img/cr2.png";
import cl from "../../img/cr4.png";
//import mp from "../../img/cr0.png";

export default function ProjectList() {

    const [projects] = useState([
       
        
        {
            name: "study-buddy",
            image: sb,
            button: "sb"
        }
        ,
        
        {
            name: "ContactList",
            image: cl,
            button: "cl"
        }
        ,
        
        {
            name: "EmotionDetection",
            image: ed,
            button: "ed"
        }
        ,
        
        {
            name: "ClinicalReport",
            image: cr,
            button: "cr"
        }
    ]);


    function showModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "block";
        modal.style.display = "block";
    }

    function addbackground(image) {
        const style = {
            backgroundImage: `url(${image})`
            }
        return style;
    }

    return (
        <div className="row my-5">
            {
                projects.map((project, index) => {
                return(
                    <div className={"testbg col-12 col-sm-12 col-md-4 wow fadeIn"} key={index} style={addbackground(project.image)}>
                        <div className="overlay">
                            <div className="text">
                                <h2>{project.name}</h2>
                            </div>
                            <div>
                                <button id={project.button + "-button"} className="project-button" onClick={() => showModal(project.name)}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                )})
            }
        </div>
    );
}