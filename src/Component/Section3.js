import React from "react";
import Chevron from 'react-chevron'
function Section3() {
    return (
        <section className="third-highlight-wrapper">
            <div className="internal-wrapper">
                <div className="title-wraper">
                    iPhone 11
                </div>
                <div className="description-wrapper">
                    Just the right amount of everything.
                </div>
                <div className="price-wrapper">
                    From $16.62/mo. or $399 with trade‑in.
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

export default Section3;