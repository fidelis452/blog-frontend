import React from 'react'
import "./Experience.css"
import image from "../img/IMG_6694.jpg"
export default function Blog() {
    return (
        <div className='experience'>
            <section id="experience">
                {/* <div class="container"> */}
                <h2>EXPERIENCE</h2>
                <div class="experience-ct">
                    <div class="row">
                        <div class="col-md-6 timeline-label">
                            <h4>key areas</h4>
                            <p id="p">front end development, wordpress development and SEO improvement.</p>
                            <a href="https://pt.linkedin.com/in/marinamarques9" alt="LinkedIn profile" target="_blank">
                                <div class="button-group-li">
                                    <div class="text-timeline">View on LinkedIn</div>
                                    <div class="icon-li"><span class="fa fa-linkedin" aria-hidden="true"></span></div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6 timeline col-exp">
                            <div class="timeline-year">
                                <time datetime="2021">2021</time>
                                <div class="timeline-experience">
                                    <span class="timeline-circle"></span>
                                    <div class="timeline-experience-info clear-after">
                                        <h5>Acquiretek</h5>
                                        <div class="timeline-role">Frontend Developer</div>
                                        <p id="p">Mar 22 - Present</p>
                                        <div class="timeline-role">Kofax Solution Engineer</div>
                                        <p id="p">Nov - Present</p>
                                    </div>
                                    {/* <!-- experience-info --> */}
                                </div>
                                {/* <!-- experience --> */}
                                <time datetime="2019">2019</time>
                                <div class="timeline-experience">
                                    <span class="timeline-circle"></span>
                                    <div class="timeline-experience-info clear-after">
                                        <h5>Starr Graphics</h5>
                                        <div class="timeline-role">Graphic Designer</div>
                                        <p id="p">Jan 2019 - To-date</p>
                                    </div>
                                    {/* <!-- experience-info --> */}
                                </div>
                                {/* <!-- experience --> */}
                                {/* <!-- year --> */}
                                <time datetime="2021">2021</time>
                                <div class="timeline-experience">
                                    <span class="timeline-circle"></span>
                                    <div class="timeline-experience-info clear-after">
                                        <h5>Laikipia County</h5>
                                        <div class="timeline-role">Information Technology Department<br />
                                            Worked as an attachee.<br />
                                            Nyahururu Falls, Nyandarua, Kenya</div>
                                        <p id="p">Apr 2021 - Nov 2021</p>
                                    </div>
                                    {/* <!-- experience-info --> */}

                                </div>
                            </div>
                        </div>
                        {/* <!-- year --> */}
                    </div>
                </div>
                {/* <!-- end row of two columns --> */}
                {/* </div> */}
                {/* <!-- end experience container of two columns --> */}
            </section>
        </div>
    )
}
