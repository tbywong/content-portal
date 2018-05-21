import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import ContentTab from './ContentTab/ContentTab.jsx';
import './tabs.scss';

const panes = [
  {
    menuItem: { key: 'premium', icon: 'star', content: 'PREMIUM' },
    pane: (
      <Tab.Pane key="tab1" className="cp-tab-pane">
        <p>this tab is complex1</p>
        <ContentTab />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: 'standard', icon: 'pencil', content: 'STANDARD' },
    pane: (
      <Tab.Pane key="tab2" className="cp-tab-pane">
        <p>this tab is complex2</p>
        <ContentTab />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: 'video', icon: 'video play', content: 'VIDEO' },
    pane: (
      <Tab.Pane key="tab3" className="cp-tab-pane">
        <p>this tab is complex3</p>
        <ContentTab />
      </Tab.Pane>
    )
  }
]

export default class ContentPortal extends Component {
  render () {
    return (
      <Tab panes={panes} className="cp-categories" renderActiveOnly={false} />
    )
  }
}
