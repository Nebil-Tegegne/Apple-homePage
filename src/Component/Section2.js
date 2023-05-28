import React from "react";
import Chevron from 'react-chevron'
function Section2() {
    return (
        <section className="second-hightlight-wrapper">
            <div className="internal-wrapper">
                <div className="title-wraper">
                    iPhone 11 Pro
                </div>

                <div className="description-wrapper">
                    Pro cameras. Pro display. Pro performance.
                </div>

                <div className="price-wrapper">
                    From $24.95/mo. or $599 with trade‑in.
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
export default Section2;