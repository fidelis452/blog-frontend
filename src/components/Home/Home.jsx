import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"
import image from "../img/logo-01.png"
export default function Home() {
    return (
        <div class="header">
            {/* <!--Content before waves-->   */}
            <div class="inner-header flex">
                {/* <!--Just the logo.. Don't mind this-->   */}
                <div class="grid justify-content-md-center">
                    <div class=" g-col-6">
                        <h1 className='name'>Fidelis Waweru</h1>
                    </div>
                    <div class="g-col-6">
                        <h1 className='title'>Junior Software Developer</h1>
                        <h1 className='title'> Data Engineer</h1>
                    </div>
                </div>
                <div className='image'></div>
            </div>
            {/* <!--Waves Container-->   */}
            {/* <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div> */}
            {/* <!--Waves end-->   */}
        </div>
    )
}
