import React, {useState} from "react";

//import images
import sb from "../../img/cr3.png";
//import todo from "../../img/td.png";
import cr from "../../img/cr1.png";
import ed from "../../img/cr2.png";
import cl from "../../img/cr4.png";
//import mp from "../../img/cr0.png";




import HiddenModalDescription from "./hiddenModals.description";

export default function HiddenModals() {

    const [projects, setProjects] = useState([
       
        
        {
            name: "study-buddy",
            image: sb,
            
            ref: "./studdy-buddy/index.html",
            description: [
                "Developed a discord-like web application where anyone can chat and discuss any topic by making respective rooms using python, Django, HTML, CSS, and JavaScript • Improved the CRUD operations and decreased the redundancy, learned about authentication & authorization and worked with Django REST API framework"
                
            ]
        },
        {
            name: "ClinicalReport",
            image: cr,
            
            ref: "./clinicalReport/index.html",
            description: [
                "Created a clinical data reporting project in which a Lab assistant can edit the number of patients and their medical information using python and its framework Django.learned about search, database, and CRUD operations using function & class-based generic views, in ubuntu (Linux)."
                
            ]
        },
        {
            name: "EmotionDetection",
            image: ed,
            
            ref: "./EmotionDetection/index.html",
            description: [
                "Build an application that can detect human face and their emotions using python and machine learning libraries like keras and TensorFlow.• Learned about Convolutional Neural network (Deep learning)."
                
            ]
        },
        {
            name: "ContactList",
            image: cl,
            
            ref: "./ContactList/index.html",
            description: [
                "Developed a ContactLIst with the help of HTML,CSS,javascript and react in this application we can add the contacts (Gmails) of different people and also delete it if not in use."
                
            ]
        }
    ]);


    function hiddeModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "none";
        modal.style.display = "none";
    }

    const style = {
        textAlign: "right",
        fontWeight: 900,
        fontSize: 2 + "rem",
        cursor: "pointer"
    }


    return(
		<div id="gallery-card">
        {
            projects.map((project, index) => {
            return (
                <div id={project.name} className="modal-card" key={index}>
                    <div className="visual">
                        <img src={project.image} alt=""/>
                    </div>

                    <div className="modal-info">
                        <h2>{project.name}</h2>

                        <HiddenModalDescription description={project.description} />

                        <div className="modal-bottom">
                            <a href={project.ref} target="_blank">
                                <h3>{project.status}</h3>
                            </a>
                            <p className="close-icon" style={style} onClick={() => hiddeModal(project.name)}>&#10005;</p>
                        </div>

                    </div>
                </div>
            );})
        }
        </div>
    );
}
