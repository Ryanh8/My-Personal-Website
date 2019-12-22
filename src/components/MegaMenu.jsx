import React, { Component, Fragment } from "react";
import "./MegaMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class MegaMenu extends Component {
  render() {
    return (
      <Fragment>
        <div className='navbar'>
          <a href='#home'>Home</a>
          <a href='#news'>News</a>
          <div className='dropdown'>
            <button className='dropbtn'>Dropdown</button>
            <FontAwesomeIcon icon='check-square' />
            <div className='dropdown-content'>
              <div className='header'>
                <h2>Mega Menu</h2>
              </div>
              <div className='row'>
                <div className='column'>
                  <h3>Academics</h3>
                  <a href='#top'>Link 1</a>
                  <a href='#top'>Link 2</a>
                  <a href='#top'>Link 3</a>
                </div>
                <div className='column'>
                  <h3>Activities</h3>
                  <a href='#top'>Link 1</a>
                  <a href='#top'>Link 2</a>
                  <a href='#top'>Link 3</a>
                </div>
                <div className='column'>
                  <h3>Communities</h3>
                  <a href='#top'>Link 1</a>
                  <a href='#top'>Link 2</a>
                  <a href='#top'>Link 3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MegaMenu;
