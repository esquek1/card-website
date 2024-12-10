import React from "react";
import "../css/bout.css";
import img_polaroid1 from "../assets/polaroids.png";
import img_polaroid2 from "../assets/polaroid_2.png";
import img_howdy from "../assets/howdy.png";
import img_garfield from "../assets/garf_sticker.png";

function About() {
    return (
        <div className="about-container">
            <div className="about-foreground">
                <img src={img_howdy} alt="" />
            </div>
            <div className="about-background">
                <div className="about-content">
                    <div className="about-left-side">
                        <div className="about-polaroids">
                            <img src={img_polaroid1} alt="" />
                            <div className="about-top-half">
                                <div className="about-resume">
                                    <h1>RESUME</h1>
                                </div>
                                <div className="img_polaroid2">
                                    <img src={img_polaroid2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="img_garfield">
                            <img src={img_garfield} alt="" />
                        </div>
                    </div>
                    <div className="about-text">
                        <p>
                            I’m a Filipino native to Los
                            <br />
                            Angeles, and illustrations
                            <br />
                            are my jam. I’m always
                            <br />
                            looking for ways to infuse
                            <br />
                            that creative spark into
                            <br />
                            my work. When I’m not
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
            </div>
        </div>
    );
}

export default About;
