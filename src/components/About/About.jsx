import React from 'react'
import "./About.css"
import image from "../img/IMG_6694.jpg"
export default function About() {
    return (
        <div className='contain'>

            {/* <!-- Outer Row --> */}
            <div class="row justify-content-center">

                {/* <div class="col-xl-10 col-lg-12 col-md-9"> */}

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg"></div>
                            <div class="col-lg-6 right">
                                <div class="p-5">
                                    <div class="aboutme text-center">
                                        <h1 class="h4 text-gray-900 mb-4">About Me</h1>
                                    </div>
                                    <div className='about'>
                                        <p className='about-p'>I’m a Front-End Developer located in Poland.
                                            I have a serious passion for UI effects,
                                            animations and creating intuitive, dynamic user experiences.

                                            Well-organised person, problem solver, independent
                                            employee with high attention to detail. Fan of MMA,
                                            outdoor activities, TV series and English literature.
                                            A family person and father of two fractious boys,

                                            Interested in the entire frontend spectrum and
                                            working on ambitious projects with positive people.</p>
                                    </div>
                                    <div class="text-center">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        // </div>
    )
}
