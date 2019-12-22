import React, { Component } from "react";
import "./Sliders.css";
import ScrollMagic from "scrollmagic";
import TweenMax from "gsap";

export class Slides extends Component {
  constructor(pros) {
    super(pros);
    this.slidesData = [
      {
        id: 1,
        title: "Image 1 Title",
        description: "Image 1 description goes here"
      },
      {
        id: 2,
        title: "Image 2 Title",
        description: "Image 2 description goes here"
      },
      {
        id: 3,
        title: "Image 3 Title",
        description: "Image 3 description goes here"
      },
      {
        id: 4,
        title: "Image 4 Title",
        description: "Image 4 description goes here"
      }
    ];
  }
  componentDidMount() {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave",
        duration: "100%"
      }
    });
    var slides = document.querySelectorAll("div.slide");

    var tween = TweenMax.from(".caption", 5, {
      backgroundColor: "rgb(255, 39, 46)",
      scale: 5,
      rotation: 360
    });
    // Create a scene for first trigger and set properties via an object
    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
        .setPin(slides[i], { pushFollowers: true }) //pin the image
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    }
  }
  render() {
    return (
      <div className='slides'>
        {this.slidesData.map(item => (
          <div id={"slide-" + item.id} className='slide'>
            <div className='caption'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Slides;
