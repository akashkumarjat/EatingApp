import React, { Component } from 'react'

export default class Second_header extends Component {
    render() {
        return (
            <div>
                   <div className="second-header">
                    <div className="container">
                        <div className=" row  ">
                            <div className="col-lg-5 col-md-6">
                                <a href="" class="back-btn"><i class='fas fa-angle-left'></i></a>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <a class="navbar-brand" href="#">
                                    <img className="img-fluid full-img" width="30" height="30" alt="" src={require('../img/eat-fit-logo-white.png')} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
