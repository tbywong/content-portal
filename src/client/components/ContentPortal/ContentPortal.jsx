import React from 'react';
import '../../styles/contentPortal.scss';
import logo from '../../images/sc_logo.svg';

export default class ContentPortal extends React.Component {
    render () {
        return (
            <div className="content-portal">
              <div className="content-portal__navigation-links">
                <ul>
                  <li><img src={logo} /></li>
                  <li>PUBLISHERS</li>
                  <li>SELL WITH US</li>
                  <li>ABOUT</li>
                  <li>PRESS</li>
                  <li>CAREERS</li>
                  <li>BLOG</li>
                </ul>
              </div>
              <h1 className="content-portal__title">CONTENT PORTAL</h1>
            </div>
        )
    }
}
