import React from "react";
import "../css/About.css";
import img_polaroid1 from "../assets/polaroids.png";
import img_polaroid2 from "../assets/polaroid_2.png";
function about() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-images">
                    <div className="img_polaroid1">
                        <img src={img_polaroid1} alt="" />
                    </div>
                    <div className="img_polaroid2">
                        <img src={img_polaroid2} alt="" />
                    </div>
                </div>

                <p>
                    I’m a queer Filipino native
                    <br /> to Los Angeles, and
                    <br />
                    illustrations are my jam.
                    <br /> I’m always looking for
                    <br />
                    ways to infuse that
                    <br />
                    creative spark into my
                    <br />
                    work. When I’m not
                    <br />
                    designing, you’ll find me
                    <br />
                    hanging out with animals
                    <br />
                    (specifically my cats),
                    <br />
                    cooking up new recipes,
                    <br />
                    listening to new music,
                    <br />
                    sampling delicious foods,
                    <br />
                    getting competitive in
                    <br />
                    first-person shooter
                    <br />
                    games, or losing myself
                    <br />
                    in a good puzzle. Life’s too
                    <br />
                    short for boring hobbies!
                </p>
            </div>
        </div>
    );
}

export default about;
