import React, { Component } from "react";
import * as THREE from "three";
import "./ParticleAnimation.css";
import MegaMenu from "./MegaMenu";

export default class ParticleBackground extends Component {
  componentDidMount() {
    // Number of particals
    var SEPARATION = 100,
      AMOUNTX = 30,
      AMOUNTY = 20;

    var camera, scene, renderer;

    var particles,
      particle,
      count = 0;

    var mouseX = 85,
      mouseY = -342;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2 + 200;

    init(this.mount);
    animate();

    function init(parent) {
      camera = new THREE.PerspectiveCamera(
        120,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.z = 500;

      scene = new THREE.Scene();

      particles = [];

      var material = new THREE.SpriteMaterial({ color: 0xffffff });

      var i = 0;

      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new THREE.Sprite(material);
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          scene.add(particle);
        }
      }

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      parent.appendChild(renderer.domElement);
      parent.addEventListener("mousemove", onDocumentMouseMove, false);
      parent.addEventListener("touchstart", onDocumentTouchStart, false);
      parent.addEventListener("touchmove", onDocumentTouchMove, false);
      window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    }

    function onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    }

    //

    function animate() {
      requestAnimationFrame(animate);

      render();
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      var i = 0;

      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 1) * 2 +
            (Math.sin((iy + count) * 0.5) + 1) * 2;
        }
      }

      renderer.render(scene, camera);

      count += 0.1;
    }
  }
  render() {
    return (
      <div
        ref={ref => (this.mount = ref)}
        id='particleDiv'
        className='particlebody'
      >
        <MegaMenu></MegaMenu>
      </div>
    );
  }
}
