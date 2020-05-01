import React from "react";

import Embassy from "../../static/svg/government.svg";
import GameController from "../../static/svg/game-controller.svg";
import Controls from "../../static/svg/controls.svg";
import VrGlasses from "../../static/svg/vr-glasses.svg";
import VideoCamera from "../../static/svg/video-camera.svg";
import RollerCoaster from "../../static/svg/roller-coaster.svg";

export default props => (
    <section className="icons">
        <div id="services" className="anchor"></div>
        <div className="container">
            <h2>We make Music for...</h2>
            <div className="row">

                <div className="col-lg-4 col-md-6">
                    <div className="service">
                        <div className="service__flex-container">
                            <Embassy id="embassy" className="service__icon service__icon--events"/>
                            <h3 className="service__title">Events</h3>
                        </div>
                        <p className="service__text">Projection Mapping, Fireworks &amp; Show Openings</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">
                        <div className="service__flex-container">
                            <GameController id="game-controller" className="service__icon service__icon--games"/>
                            <h3 className="service__title">Games</h3>
                        </div>
                        <p className="service__text">Apps, Adaptive &amp; Console Games</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">
                        <div className="service__flex-container">
                            <Controls id="controls" className="service__icon"/>
                            <h3 className="service__title">Technical Solutions</h3>
                        </div>
                        <p className="service__text">Audio Implementation, 3D Sound &amp; Mixing and Mastering</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">
                        <div className="service__flex-container">
                            <VideoCamera id="video-camera" className="service__icon service__icon--camera"/>
                            <h3 className="service__title">Film</h3>
                        </div>
                        <p className="service__text">Commercial, Feature Film &amp; Documentary</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">
                        <div className="service__flex-container">
                            <VrGlasses id="vr-glasses" className="service__icon service__icon--xr"/>
                            <h3 className="service__title">Extended Reality</h3>
                        </div>
                        <p className="service__text">Augmented, Virtual &amp; Mixed Reality</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">
                        <div className="service__flex-container">
                            <RollerCoaster id="roller-coaster" className="service__icon service__icon--attractions"/>
                            <h3 className="service__title">Attractions</h3>
                        </div>
                        <p className="service__text">Theme Parks, Roller Coasters &amp; Interactive Installations</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
);
