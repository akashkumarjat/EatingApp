import React, { Component } from 'react'
import '../Sass/about_female.scss';
import '../Sass/Ideal_weight_female.scss';
export default class Ideal_weight_female extends Component {
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
                                    <h1>Ideal weight</h1>
                                    <p>Great! Now, what's your goal weight?</p>
                                </div>
                            </div>
                        </div>

                        <form class="Ideal_form">
                            <div className="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 ">

                                    <div class="nav nav-tabs nav-fill Ideal-weight-option" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Imperial</a>
                                        <a class="nav-item nav-link " id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Metric</a>
                                    </div>

                                    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                                            <div class="number-field">
                                                <div class="number-field__drop"></div>
                                                <div class="number-field__wrap">
                                                    <input class="number-field__input" type="number" autocomplete="off" required />
                                                    <div class="number-field__label">lbs</div>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                            <div class="number-field">
                                                <div class="number-field__drop"></div>
                                                <div class="number-field__wrap">
                                                    <input class="number-field__input" type="number" autocomplete="off" required />
                                                    <div class="number-field__label">kg</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                        {/* <input className="btn " type="submit" value="Continue"/> */}
                                            <a href="Your_Metrics" class="btn btn-lg red">Continue</a>
                                        </div>
                                        {/* <button className="continue-btn">
                                            <a href="Your_Metrics">Continue</a>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
