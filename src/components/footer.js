import React from "react";

import codepen from "../img/codepen.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

export default function Footer() {

		//get current year
		const year = new Date().getFullYear();
		
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">

							<a
								className="px-3"
								href="https://github.com/UtkarshKumar088"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/>
							</a>
							<a
								href="https://www.linkedin.com/in/utkarsh-kumar-95036b193/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
							</a>
							<br></br>
							<br></br>
							<a href="https://www.linkedin.com/in/utkarsh-kumar-95036b193/overlay/1635540369205/single-media-viewer/?profileId=ACoAAC1wCYwBPyb64e4lQeU4i_x6XN877WazuIc" download>See My Resume</a>
						</div>
					</div>
					<h5 className="pt-4">Utkarsh Kumar &copy; {year}</h5>
				</div>
			</div>
		);
}
