import React from 'react'
import "./Blog.css"
export default function Blog() {
    return (
        <div>
            <div class="blog_post">
                <div class="img_pod">
                    {/* <h1>Veiw Blog</h1> */}
                    <img class="image" src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random image" />
                </div>
                <div class="container_copy">
                    <h3>12 January 2019</h3>
                    {/* <h1>CSS Positioning</h1> */}
                    <p>Veiw blog postings</p>
                    <a class="btn_primary" href='#' target="_blank">Blog</a>
                </div>

            </div>
        </div>
    )
}
