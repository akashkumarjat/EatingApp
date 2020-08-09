import React, { Component } from 'react';
import '../Sass/about_female.scss';


export default class About_Female extends Component {
    render() {
        return (
            <>
                <div className="second-header">
                    <div className="container">
                        <div className=" row  ">
                            <div className="col-5">
                                <a href="/index" class="back-btn"><i class='fas fa-angle-left'></i></a>
                            </div>
                            <div className="col-7">
                                <a class="navbar-brand" href="/index">
                                    <img className="img-fluid logo_second" width="100" height="30" alt="" src={require('../img/eat-fit-logo-white.png')} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parent_div">
                    <div className="child_div">
                        <div className="container">
                            <div className="row">
                                {/* --Top Content-- */}
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <h1>Target</h1>
                                    <p>Well-balanced nutrition provides multiple health benefits. <br />We will focus on the one most important to you.</p>
                                    <p>What would you like to achieve?</p>
                                </div>
                            </div>
                        </div>



                        {/* --multi-option-- */}
                        <div className="container">
                            <div className="row ">
                                {/* --option 1-- */}
                                <div className="col-lg-6 ">
                                    <div className="container">
                                        <a href="/Ideal_weight_female" >
                                            <div className="row female_option">
                                                <div className="col-5 " >
                                                    <h2>Lose weight</h2>
                                                </div>
                                                <div className="col-7">
                                                    <img className="img-fluid female-icon-img" alt="" src={require('../img/woman-measuring-her-waist-illustration_53876-43294-removebg-preview.png')} />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>


                                {/* --option 2-- */}
                                <div className="col-lg-6">
                                    <div className="container">
                                        <a href="/Ideal_weight_female" >
                                            <div className="row female_option">
                                                <div className="col-5">
                                                    <h2>Get leaner &amp; lose extra pounds</h2>
                                                </div>
                                                <div className="col-7">
                                                    <img className="img-fluid female-icon-img" alt="" src={require('../img/woman-with-measuring-tape_144627-28905-removebg-preview.png')} />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>


                                {/* --option 3-- */}
                                <div className="col-lg-6">
                                    <div className="container">
                                        <a href="/Ideal_weight_female" >
                                            <div className="row female_option">
                                                <div className="col-5">
                                                    <h2>Gain muscle</h2>
                                                </div>
                                                <div className="col-7">
                                                    <img className="img-fluid female-icon-img" alt="" src={require('../img/young-sexy-woman-fitness_98292-5116-removebg-preview.png')} />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>


                                {/* --option 4-- */}
                                <div className="col-lg-6">
                                    <div className="container">
                                        <a href="/Ideal_weight_female" >
                                            <div className="row female_option">
                                                <div className="col-5 ">
                                                    <h2>Develop healthy habits</h2>
                                                </div>
                                                <div className="col-7 ">
                                                    <img className="img-fluid female-icon-img" alt="" src={require('../img/healthy-lifestyle-fitness-girl_98292-5118-removebg-preview.png')} />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
