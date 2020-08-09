import React, { Component } from 'react'
import '../Sass/about_male.scss';
import '../Sass/landingpage.scss'
export default class About_Male extends Component {
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


                        <div className="list-item-div">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 ">
                                        <div class="list-item">
                                            <a href="/Ideal_weight">
                                                <div class="tile">
                                                    <h2>Lose Weight</h2>
                                                </div>
                                                <div class="tile">
                                                    <img className="img-fluid target-img" src={require('../img/basic-male-img-1.png')} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 ">
                                        <div class="list-item">
                                            <a href="/Ideal_weight">
                                                <div class="tile">
                                                    <h2>Gain muscle</h2>
                                                </div>
                                                <div class="tile">
                                                    <img className="img-fluid target-img" src={require('../img/Six-pack-abs-removebg-preview.png')} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 ">
                                        <div class="list-item">
                                            <a href="/Ideal_weight">
                                                <div class="tile">
                                                    <h2>Develop Healthy habits</h2>
                                                </div>
                                                <div class="tile">
                                                    <img className="img-fluid target-img" src={require('../img/1510305276-8424-removebg-preview.png')} />

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>














                {/* <div className="about-male-div">
                    <div className=" Target-step">
                        <div>
                            <h2>Target</h2>
                            <p>Well-balanced nutrition provides multiple health benefits. <br />We will focus on the one most important to you.</p>
                            <h4>What would you like to achieve?</h4>
                        </div>





                        <div className="list-item-div">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 ">
                                        <div class="list-item">
                                            <a href="/Ideal_weight">
                                                <div class="tile">
                                                    <h1>Lose Weight</h1>
                                                </div>
                                                <div class="tile">
                                                    <img className="img-fluid target-img" src={require('../img/basic-male-img-1.png')} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 ">
                                        <div class="list-item">
                                            <a href="/Ideal_weight">
                                                <div class="tile">
                                                    <h1>Gain muscle</h1>
                                                </div>
                                                <div class="tile">
                                                    <img className="img-fluid target-img" src={require('../img/basic-male-img-2.png')} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 ">
                                        <div class="list-item">
                                            <a href="/Ideal_weight">
                                                <div class="tile">
                                                    <h1>Develop Healthy habits</h1>
                                                </div>
                                                <div class="tile">
                                                <img className="img-fluid target-img" src={require('../img/basic-male-img-1.png')} />
                                                
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            
                        </div>
                    </div>
                </div> */}
            </>
        )
    }
}
