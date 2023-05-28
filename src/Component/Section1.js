import React from "react";
import Chevron from 'react-chevron'
import MacLaptop from "./images/home/mac-laptop.jpg";
function Section1(){
    return (
        <section className="main-highlight-wrapper">
			<div className="internal-wrapper"> 
				<div className="model">
					16-inch model
				</div>

				<div className="product-title">
					MacBook Pro
				</div>

				<div className="brief-description">
					The best for the brightest.
				</div>

				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more <Chevron /></a></li>
						<li><a href="">Buy<Chevron/>  </a></li>
					</ul> 
				</div>

				<div className="main-image-wrapper">
					<img src={MacLaptop} alt="mac laptop"/>
				</div>

			</div>
		</section>
    )
}

export default Section1;
