import React, { Component } from 'react'
import '../Sass/your_metrics.scss';
export default class Your_Metrics extends Component {
    render() {
        return (

            <>
                <div className="second-header">
                    <div className="container">
                        <div className=" row  ">
                            <div className="col-5">
                                <a href="/Ideal_weight" className="back-btn"><i class='fas fa-angle-left'></i></a>
                            </div>
                            <div className="col-7">
                                <a className="navbar-brand" href="/index">
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
                                <div className="col-lg-12">
                                    <h1>Your metrics</h1>
                                    <p>All right. What are your height and<br />current weight?</p>
                                </div>
                            </div>
                        </div>
                        <form className="Ideal_form">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">

                                        <div className="nav nav-tabs nav-fill Ideal-weight-option" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Imperial</a>
                                            <a className="nav-item nav-link " id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Metric</a>
                                        </div>

                                        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                                            {/* -------Imperial------- */}
                                            <div className="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div className="row unit_row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                                                        <div className="select-div">
                                                            <label>Height(ft)</label>
                                                            <select className="dropdown_list">
                                                                <option value="" ></option>
                                                                <option value="4" >4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row unit_row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                                                        <div className="select-div">
                                                            <label>Height(in)</label>
                                                            <select className="dropdown_list">
                                                                <option value="" ></option>
                                                                <option value="0" >0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4" >4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                                <option value="9" >9</option>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row unit_row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 ">

                                                        <div className="select-div">
                                                            <label>Current Weight (lbs)</label>
                                                            <select className="dropdown_list">
                                                                <option value="" ></option>
                                                                <option value="90" >90</option>
                                                                <option value="91">91</option>
                                                                <option value="92">92</option>
                                                                <option value="93">93</option>
                                                                <option value="94" >94</option>
                                                                <option value="95">95</option>
                                                                <option value="96">96</option>
                                                                <option value="97">97</option>
                                                                <option value="98">98</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* -----Metric-------- */}
                                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <div className="row unit_row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 ">

                                                        <div className="select-div Metric">
                                                            <label>height (cm)</label>
                                                            <select className="dropdown_list">
                                                                <option value="" ></option>
                                                                <option value="4" >4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row unit_row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 ">

                                                        <div className="select-div Metric">
                                                            <label>Current Weight (kg)</label>
                                                            <select className="dropdown_list">
                                                                <option value="" ></option>
                                                                <option value="55" >55</option>
                                                                <option value="56">56</option>
                                                                <option value="57">57</option>
                                                                <option value="58">58</option>
                                                                <option value="59" >59</option>
                                                                <option value="60">60</option>
                                                                <option value="61">61</option>
                                                                <option value="62">62</option>
                                                                <option value="63">63</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <input className="btn " type="submit" value="Continue"/>
                                                {/* <a href="Your_Metrics" className="btn btn-lg red">Continue</a> */}
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
