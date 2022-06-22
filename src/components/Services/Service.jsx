import React from 'react'
import "./Service.css"
export default function About() {
  return (
      <section class="text-center about">
      {/* <div class="container"> */}
      <h1>Services</h1>
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
            <span class="fa fa-group"></span>
            <h2>Web Development</h2>
            <p class="lead">Building website and deploying on the web.</p>
          </div>
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span class="fa fa-info"></span>
            <h2>Graphics Design</h2>
            <p class="lead">Branding Designs(Logos, company letterhead, business cards, signage, company brochures), Website design,Print Design, publish design, etc..</p>
          </div>
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span class="fa fa-file"></span>
            <h2>Data Analysis</h2>
            <p class="lead">Coming soon....</p>
          </div>
          
        </div>
        
      {/* </div> */}
    </section>
  )
}
