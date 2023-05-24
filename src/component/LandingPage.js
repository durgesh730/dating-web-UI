import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo_tda.png";
import footer from '../images/footer-icon.png'

const LandingPage = () => {
    return (
        <>
            <div className="web1">
                <div className="row">
                    <div className="col-lg-4 col-12 col">
                        <div className="web1-signin d-flex flex-column justify-content-between">
                            <div className="menu">
                                <div className="Rectangle-1"></div>
                                <div className="Rectangle-2"></div>
                                <div className="Rectangle-3"></div>
                            </div>
                            <div className="text-center">
                                <img src={logo} alt="" className="web1-logo" />
                            </div>
                            {/* <div className="web1-tagline">This is dating Site Where you want ?</div> */}
                            <div className="web1-buttons">
                                <span>Tired of being alone?</span> <br/><br/>
                                <small>Our gorgeous asian single ladies want to  <br/> meet older gentlemen online. But, we <br/>   need to  make sure you are the <br/>  right person.</small>
                                <div className="my-4" >
                                    <button className="btn btn-talents">Ok!</button>
                                </div>
                            </div>
                            <div className="alternate-option mt-5 text-center">
                                <span>
                                    Terms of Use
                                    Privacy Policy
                                    Advertiser Disclosure
                                </span><br />
                                <small>

                                    © 2023 All Rights Reserved.
                                </small>
                                <div className="text-center footerimg  my-2">
                                    <img src={footer} alt="" className="web1-logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col stylishImages">
                        <div className="web1-images">
                            <div className="grid-container">
                                <div className="column">
                                    <div className="web1-image lastsecond ">
                                        <img src="https://filmfare.wwmindia.com/content/2019/apr/aliabhatt11554808888.jpg" />
                                    </div>
                                    <div className="web1-image">
                                        <img src="https://theindianwire.com/wp-content/uploads/2019/09/Mrunal-Thakur3.jpg" />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="web1-image">
                                        <img src="https://i.pinimg.com/736x/a7/1a/18/a71a18e3339c8b0f12e3dc9f62466c21.jpg" />
                                    </div>

                                    <div className="web1-image">
                                        <img src="https://www.easterneye.biz/wp-content/uploads/2019/03/Deepika-Padukone.jpg" />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="web1-image seclast ">
                                        <img src="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                                    </div>
                                    <div className="web1-image seclastlast ">
                                        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="web1-image">
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                                    </div>
                                    <div className="web1-image">
                                        <img src="https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
