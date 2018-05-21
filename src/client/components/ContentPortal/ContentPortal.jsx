import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import './contentPortal.scss';

export default class ContentPortal extends Component {
  render () {
    return (
      <div className="cp-content-portal">
        <Navigation />
        <h1 className="cp-content-portal__title">
          CONTENT PORTAL
        </h1>
        <Tabs />
      </div>
    )
  }
}
