import React from 'react'
import "./web.css"
export default function Graphics() {
    var modalInfo = {
        1: {
            title: "Project 1",
            info: "...",
            link: "#",
            github: "#"
        },
        2: {
            title: "Project 2",
            info: "...",
            link: "#",
            github: "#"
        },
        3: {
            title: "Project 3",
            info: "...",
            link: "#",
            github: "#"
        },
        4: {
            title: "Project 4",
            info: "....",
            link: "#",
            github: "#"
        },
        5: {
            title: "Project 5",
            info: "...",
            link: "#",
            github: "#"
        },
        6: {
            title: "Project 6",
            info: "...",
            link: "#",
            github: "#"
        }
    };

    // Get the modal
    var modal = document.getElementById('preview');

    // button that opens the modal
    var btn = document.getElementsByClassName("button");

    // <span> that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // open modal 
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            var project = btn[i].parentElement;
            openModal(project);
        })
    };

    function openModal(project) {
        var id = project.id;
        var img = project.getElementsByTagName("img")[0].src;
        fillOut(id, img);
        modal.style.display = "block";
        document.getElementsByClassName("modal-content")[0].classList.add("scale");
    }

    function fillOut(id, img) {
        document.getElementById("title").innerHTML = modalInfo[id].title;
        document.getElementById("info").innerHTML = modalInfo[id].info;
        document.getElementById("img").src = img;
        document.getElementById("live").onClick = function () {
            window.open(modalInfo[id].link, '_blank');
        }
        document.getElementById("github").onClick = function () {
            window.open(modalInfo[id].github, '_blank');
        }
    }

    // close the modal
    //   span.onClick = function() {
    //       modal.style.display = "none";
    //   }

    //   window.onClick = function(event) {
    //       if (event.target == modal) {
    //           modal.style.display = "none";
    //       }
    //   }
    return (
        <div className='section'>
            <section>
                <h1 className='h1'>Projects</h1>

                {/* <div class="container"> */}
                <div class="item" id="1">
                    <img src="https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f841d43a63c085e930aa5b6b33e89a9f&auto=format&fit=crop&w=1385&q=80" alt="" />
                    <div class="text">
                        <h3>PROJECT 1</h3>
                        <p>Short Description</p>
                    </div>
                    <div class="button">Learn More</div>
                </div>

                <div class="item" id="2">
                    <img src="https://images.unsplash.com/photo-1496492352121-593138d42a61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3542849cc0459345e3aa82a90ae51a01&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <div class="text">
                        <h3>PROJECT 2</h3>
                        <p>Short Description</p>
                    </div>
                    <div class="button">Learn More</div>
                </div>
                <div class="item" id="2">
                    <img src="https://images.unsplash.com/photo-1496492352121-593138d42a61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3542849cc0459345e3aa82a90ae51a01&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <div class="text">
                        <h3>PROJECT 2</h3>
                        <p>Short Description</p>
                    </div>
                    <div class="button">Learn More</div>
                </div>

                <div class="item" id="3">
                    <img src="https://images.unsplash.com/photo-1515215676803-119c88d493cf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=baf00747bfb9fe41ad9af8cf00dbebbf&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <div class="text">
                        <h3>PROJECT 3</h3>
                        <p>Short Description</p>
                    </div>
                    <div class="button">Learn More</div>
                </div>

                <div class="item" id="4">
                    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e3be993a88feed38e4f5374ff3ba115&auto=format&fit=crop&w=1350&q=80g" alt="" />
                    <div class="text">
                        <h3>PROJECT 4</h3>
                        <p>Short Description</p>
                    </div>
                    <div class="button">Learn More</div>
                </div>

                <div id="preview" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <img id="img" src="" />
                        <div id="details">
                            <h3 id="title"></h3>
                            <p id="info">Some text</p>
                            <div class="button" id="live">View</div>
                            <i class="fab fa-github-square" id="github"></i>
                        </div>
                    </div>

                </div>
            </section >
        </div >
    )
}
