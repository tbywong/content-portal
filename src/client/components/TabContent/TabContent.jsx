import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Selector from '../Selector/Selector.jsx';
import Article from '../Article/Article.jsx';
import './tabContent.scss';

export default class TabContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: this._getUniqueCategories(this.props.articles),
      filteredArticles: []
    }
  }

  componentDidMount () {
    const categories = this.state.categories
    this.handleSelection(categories[0])
  }

  handleSelection (selection) {
    const articles = this.props.articles

    const filteredArticles = articles
      .filter(article => article.categories.includes(selection))

    this.setState({ filteredArticles })
  }

  _getUniqueCategories (articles) {
    let parsedCategories = []

    articles.forEach(article => {
      if (article.categories.indexOf(',') > -1) {
        const toArray = article.categories
          .split(',')
          .map(category => category.trim())

        parsedCategories.concat(toArray)
      } else if (article.categories.length > 0) {
        parsedCategories.push(article.categories)
      }
    })

    return Array.from(new Set(parsedCategories));
  }

  render () {
    return (
      <div className="cp-tab-content">
        <div className="ui grid">
          <div className="four wide column">
            <Selector
              items={this.state.categories}
              onSelect={this.handleSelection.bind(this)} />
          </div>
          <div className="nine wide column cp-tab-content__main">
            <Icon name={this.props.icon} />
            {this.props.description}
          </div>
          {this.state.filteredArticles.map((article, index) => (
            <Article key={index} data={article} />
          ))}
        </div>
      </div>
    )
  }
}
