import React from "react";
import Chevron from 'react-chevron'
import appleTV from "./images/icons/apple-tv-logo.png";
import servantLogo from "./images/icons/servant-logo.png";
function Section5() {
    return (
        <section className="fifth-heghlight-wrapper">
            <div className="left-side-wrapper">
                <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                        <img src={appleTV} alt="apple TV"/>
                    </div>
                </div>

                <div className="tvshow-logo-wraper">
                    <img src={servantLogo} alt="servant-logo" className="servant"/>
                </div>

                <div className="watch-more-wrapper">
                    <a href="#">Watch the trailer</a>
                </div>
            </div>
            <div className="right-side-wrapper">
                <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                        AirPods Pro
                    </div>
                </div>

                <div className="description-wraper">
                    Magic like you’ve never heard.
                </div>

                <div className="links-wrapper">
                    <ul>
                        <li><a href="">Learn more <Chevron/></a></li>
                        <li><a href="">Buy <Chevron/></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Section5;