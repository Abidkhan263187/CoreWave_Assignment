import React from 'react'
import image from './Images/Img.png'
const SectionOne = () => {
    return (
        <div className="custom-container " style={{ backgroundImage: `url(${image})` }}>

            <div id="container" class="" >
                <p className="display-4 text-white  fw-semibold"
                >Welcome to CoreWave</p>
                <p className="lead text-white custom-paragraph fw-normal">
                    At Corewave, we understand that managing your stock
                    portfolio effectively is essential for achieving your financial
                    goals. Our comprehensive portfolio management solutions are
                    designed to help you navigate the complex world of stock
                    investments with confidence and success.
                </p>
                <button id="btn" className="btn btn-success rounded-5  btn-lg">
                    <span className="font-weight-bold">GET STARTED</span>
                </button>
            </div>
            <div id="circle" className="position-absolute "> </div>
        </div>
    )
}

export default SectionOne