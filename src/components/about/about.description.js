import React from "react";

import myImage from "../../img/myimg.jpeg";

//import skillBars
import SkillBars from "./about.description.skillBars";

export default function AboutDescription(props) {
    return (
        <div className="row wow fadeIn" style={{ marginTop: 7 + "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <img
                    className={"img-fluid"}
                    src={myImage}
                    alt="Portfolio Image"
                    style={{
                        borderRadius: 50 + "%",
                        height: 250 + "px",
                        width: 250 + "px"
                    }}
                />
                <p className="mytext pt-3">
                Innovative and highly motivated software developer with a solid foundation in the MERN stack. Passionate about building dynamic and responsive web applications. Eager to contribute my technical skills, adaptability,
                 and enthusiasm for learning to a dynamic development team.
                </p>
            </div>

            <SkillBars />

        </div>
    );
}