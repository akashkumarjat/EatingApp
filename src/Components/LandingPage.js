import React, { Component } from 'react'
import '../Sass/landingpage.scss';
export default class LandingPage extends Component {
    render() {
        return (
            <>
                {/* ---Header--- */}
                <div className="main-div">
                    <div class=" header-div">

                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <a class="navbar-brand" href="/">
                                        <img className="img-fluid logo" alt="" src={require('../img/eat-fit-logo.png')} />
                                    </a>
                                </div>
                                <div class="col-8 right_menu">
                                    <button class="right_button">Need Help?</button>
                                    <button class="right_button">Menu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="header-div">
                        <nav class="navbar  container">
                            <a class="navbar-brand" href="/">
                                <img className="img-fluid logo" alt="" src={require('../img/eat-fit-logo.png')} />
                            </a>
                            <div class="form-inline my-2 my-lg-0 nav justify-content-end">
                                <Button class="  my-2 my-sm-0">Need Help?</Button>
                                <Button class="  my-2 my-sm-0">Menu</Button>
                            </div>
                        </nav>
                    </div> */}




                    {/* Intro div */}
                    <div className="intro-div">
                        <h2>Start losing weight</h2>
                        <p>According to your Body Type & BMI</p>
                    </div>



                    {/*Content part  */}
                    <div className="content-part">
                        <div className="container">
                            <div className="row">
                                {/* -----first col-------- */}
                                <div className="col-lg-4 col-md-4 col-sm-4 ">
                                    <img className="img-fluid full_img" src={require('../img/png-transparent-running-running-man-physical-fitness-hand-sport-thumbnail-removebg-preview.png')} />
                                </div>
                                {/* -----second col------- */}
                                <div className="col-lg-4 col-md-4 middle-col">
                                    <h5>Select Your Gender</h5>
                                    <div className="row">
                                        {/* ----Male----- */}
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <label className="radio-btn">
                                                <a href="/About_Male">
                                                    <input type="radio" name="gender" value="male" />
                                                    <img className="img-fluid icon_img" src={require('../img/2933521.png')} />
                                                    <p>Male</p>
                                                </a>
                                            </label>
                                        </div>
                                        {/* ---Female----- */}
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label className="radio-btn">
                                                <a href="/About_Female">
                                                    <input type="radio" className="part" name="gender" value="female" />
                                                    <img className="img-fluid icon_img" src={require('../img/753066.png')} />
                                                    <p>Female</p>
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* ------Third col------- */}
                                <div className="col-lg-4 col-md-4 col-sm-4 ">
                                    <img className="img-fluid full_img" src={require('../img/jogging-28-1139596.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
