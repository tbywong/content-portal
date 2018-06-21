import React, { Component } from 'react';
import logo from '../../static/images/sc_logo.svg';
import './navigation.scss';

export default class Navigation extends Component {
  render () {
    return (
      <div className="cp-navigation">
        <ul>
          <li>
            <a href="https://www.stackcommerce.com"><img src={logo} /></a>
          </li>
          <li>
            <a href="https://www.stackcommerce.com/publishers" target="_blank">PUBLISHERS</a>
          </li>
          <li>
            <a href="https://www.stackcommerce.com/vendors" target="_blank">SELL WITH US</a>
          </li>
          <li>
            <a href="https://www.stackcommerce.com/about" target="_blank">ABOUT</a>
          </li>
          <li>
            <a href="https://www.stackcommerce.com/press" target="_blank">PRESS</a>
          </li>
          <li>
            <a href="https://www.stackcommerce.com/careers" target="_blank">CAREERS</a>
          </li>
          <li>
            <a href="https://blog.stackcommerce.com" target="_blank">BLOG</a>
          </li>
        </ul>
      </div>
    )
  }
}
