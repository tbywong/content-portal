import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import TabContent from '../TabContent/TabContent.jsx';
import categories from '../../static/json/categories.json';
import { standard, premium } from '../../data/articles';
import './tabs.scss';

const panes = [
  {
    menuItem: { key: 'premium', icon: 'star', content: 'PREMIUM' },
    pane: (
      <Tab.Pane key="tab1" className="cp-tab-pane">
        <TabContent
          description={categories.premium.description}
          icon={categories.premium.icon}
          articles={premium} />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: 'standard', icon: 'pencil', content: 'STANDARD' },
    pane: (
      <Tab.Pane key="tab2" className="cp-tab-pane">
        <TabContent
          description={categories.standard.description}
          icon={categories.standard.icon}
          articles={standard} />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: 'video', icon: 'video play', content: 'VIDEO' },
    pane: (
      <Tab.Pane key="tab3" className="cp-tab-pane">
        <TabContent
          description={categories.video.description}
          icon={categories.video.icon}
          articles={[]}/>
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
