import React from 'react';
import styles from './navigation.scss';
import logo from '../../images/sc_logo.svg';

export default class Navigation extends React.Component {
  render () {
    return (
      <div className={styles.navigation}>
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
    )
  }
}
