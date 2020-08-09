import React, { Component } from 'react'
import '../Sass/Img.scss'
export default class Img extends Component {
    render() {
        return (
            <>
                <div className="main_header">
                    <div className="design">
                        <img className="img-fluid " src={require('../img/pexels-photo-736230.jpeg')} />
                        <div className="rotate_border"></div>
                        <div className="grid">
                            <div className="data-white"></div>
                            <div></div>
                            <div></div>
                            <div className="data-white"></div>
                        </div>


                        {/* 2nd img */}
                        <div className="blend">
                            <img className="img-fluid " src={require('../img/pexels-photo-736230.jpeg')} />

                            <div className="grid">
                                <div></div>
                                <div className="data-white"></div>
                                <div className="data-white"></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
