import React from "react";
import Chevron from 'react-chevron'
import Watch from "./images/icons/watch-series5-logo.png";
import appleCard from "./images/icons/apple-card-logo.png";
function Section4() {
    return (
        <section className="fourth-heghlight-wrapper">
            <div className="left-side-wrapper">
                <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                        <img src={Watch} alt="watch" />
                    </div>
                </div>
                <div className="description-wraper">
                    With the new Always-On Retina display.<br/>
                        You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                    <ul>
                        <li><a href="">Learn more <Chevron/></a></li>
                        <li><a href="">Buy <Chevron/></a></li>
                    </ul>
                </div>
            </div>
            <div className="right-side-wrapper">
                <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                        <img src={appleCard} alt="apple card"/>
                    </div>
                </div>
                <div className="description-wraper">
                    Get 3% Daily Cash on purchases from Apple using Apple Card.
                </div>
                <div className="links-wrapper">
                    <ul>
                        <li><a href="">Learn more <Chevron/></a></li>
                        <li><a href="">Buy<Chevron/></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Section4;