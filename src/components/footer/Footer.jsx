import React from 'react'
import "./Footer.css"
import image from "../img/logo-01.png"
export default function Footer() {
    return (
        <div>
            {/* <!-- The content of your page would go here. --> */}

            <footer class="footer-distributed">

                <div class="footer-left">
                    <h3>About<span>Fidelis</span></h3>

                    <p class="footer-links">
                        <a classname="a-footer" href="#">Home </a><br />
                        <a classname="a-footer" href="#"> Blog </a><br />
                        <a classname="a-footer" href="#"> About </a><br />
                        <a classname="a-footer" href="#"> My Work </a><br />
                        <a classname="a-footer" href="#"> Contact </a><br />
                    </p>

                    <p class="footer-company-name">© 2022 Pvt. Ltd.</p>
                </div>

                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Kimathi Street,<br />
                            P O Box 1126-10100,<br />
                            Nyeri - Kenya </span></p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+254 797-519669</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:fideliswaweru19@gmail.com">fideliswaweru19@gmail.com</a></p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About the company</span>
                        We offer training and skill building courses across Technology, Design, Management, Science and Humanities.
                        <div class="footer-icons">
                            <a href="https://www.facebook.com/fidelis.waweru.9/"><i class="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/Fidelis52486518"><i class="fa fa-twitter"></i></a>
                            <a href="https://www.instagram.com/fidelis.waweru_/"><i class="fa fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/fidelis-waweru-97645b166/"><i class="fa fa-linkedin"></i></a>
                            <a href="https://www.youtube.com/channel/UCrK0yxpGiucawvnHF_ETLgA"><i class="fa fa-youtube"></i></a>
                        </div>
                    </p>
                </div>

            </footer>
            {/* <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar"> */}
                <div class="copyright">
                    <ul class="navbar-nav m-auto">
                        <p class="footer-company-name">© 2022 Pvt. Ltd.</p>
                    </ul>
                </div>
            {/* </nav> */}
        </div>
    )
}
