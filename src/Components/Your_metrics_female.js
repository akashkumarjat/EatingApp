import React, { Component } from 'react'
import '../Sass/Your_metrics_female.scss';

export default class Your_metrics_female extends Component {
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
                        <div className=" row  ">
                            <div className="col-lg-12 col-md-12">
                                <h1>Your metrics</h1>
                                <p>All right. What are your height and <br />current weight?</p>
                            </div>
                        </div>


                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* <!-- Nav tabs --> */}
                                    <div className="card">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li role="presentation" className="active left-option"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Imperial</a></li>
                                            <li role="presentation" className="right-option"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Metric</a></li>
                                        </ul>
                                        {/* <!-- Tab panes --> */}
                                        <div className="tab-content">
                                            {/* first option imperial */}
                                            <div role="tabpanel" className="tab-pane active" id="home">
                                                <div className="row Metrics_headings">
                                                    <div className="col-lg-7 Metrics_sub_heading_div">
                                                        <label className="Metrics_sub_heading">Height (ft)</label>
                                                        <select className="myList">
                                                            <option value="select value" >select value</option>
                                                            <option value="four">4</option>
                                                            <option value="five">5</option>
                                                            <option value="six">6</option>
                                                            <option value="seven">7</option>
                                                            <option value="eight">8</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-7 Metrics_sub_heading_div">
                                                        <label className="Metrics_sub_heading">Height (in)</label>
                                                        <select className="myList">
                                                            <option value="select value" >select value</option>
                                                            <option value="zero">0</option>
                                                            <option value="one">1</option>
                                                            <option value="two">2</option>
                                                            <option value="three">3</option>
                                                            <option value="four">4</option>
                                                            <option value="five">5</option>
                                                            <option value="six">6</option>
                                                            <option value="seven">7</option>
                                                            <option value="eight">8</option>
                                                            <option value="nine">9</option>
                                                            <option value="ten">10</option>
                                                            <option value="eleven">11</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-7 Metrics_sub_heading_div">
                                                        <label className="Metrics_sub_heading">Current Weight (lbs)</label>
                                                        <select className="myList">
                                                            <option value="select value" >select value</option>
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
                                            {/* second option metric */}
                                            <div role="tabpanel" className="tab-pane" id="profile">
                                            <div className="row Metrics_headings">
                                                    <div className="col-lg-7 Metrics_sub_heading_div">
                                                        <label className="Metrics_sub_heading">Height (cm)</label>
                                                        <select className="myList">
                                                            <option value="select value" >select value</option>
                                                            <option value="120">120</option>
                                                            <option value="121">121</option>
                                                            <option value="122">122</option>
                                                            <option value="123">123</option>
                                                            <option value="124">124</option>
                                                            <option value="125">125</option>
                                                            <option value="126">126</option>
                                                            <option value="127">127</option>
                                                            <option value="128">128</option>
                                                            <option value="129">129</option>
                                                            <option value="130">130</option>
                                                        </select>
                                                    </div>
                                                    

                                                    <div className="col-lg-7 Metrics_sub_heading_div">
                                                        <label className="Metrics_sub_heading">Current Weight (kg)</label>
                                                        <select className="myList">
                                                            <option value="select value" >select value</option>
                                                            <option value="55" >55</option>
                                                            <option value="56">56</option>
                                                            <option value="57">57</option>
                                                            <option value="58">58</option>
                                                            <option value="59" >59</option>
                                                            <option value="60" >60</option>
                                                            <option value="61">61</option>
                                                            <option value="62">62</option>
                                                            <option value="63">63</option>
                                                            <option value="64" >64</option>
                                                            <option value="65">65</option>
                                                            <option value="66">66</option>
                                                            <option value="67">67</option>
                                                            <option value="68">68</option>
                                                            <option value="69">69</option>
                                                            <option value="70">70</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <a href="/Your_Metrics_female" className="btn btn-lg red">Continue</a>
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
