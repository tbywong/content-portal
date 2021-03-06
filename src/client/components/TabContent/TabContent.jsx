import React, { Component } from 'react'
import { Icon, Responsive } from 'semantic-ui-react'
import Selector from '../Selector/Selector.jsx'
import VideoDisplay from '../VideoDisplay/VideoDisplay.jsx'
import Article from '../Article/Article.jsx'
import './tabContent.scss'

export default class TabContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: this._getUniqueCategories(this.props.articles),
      filteredArticles: []
    }
  }

  componentDidMount () {
    const categories = this.state.categories;

    if (!this.props.video) {
      this.handleSelection(categories[0])
    }
  }

  handleSelection (selection) {
    const self = this
    const articles = this.props.articles

    const filteredArticles = articles
      .filter(article => {
        return article.categories.includes(selection) && self._hasImage(article)
      })

    this.setState({ filteredArticles })
  }

  _getUniqueCategories (articles) {
    if (!articles) return;
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

    return Array.from(new Set(parsedCategories))
  }

  _hasImage (article) {
    return article.image !== 'X' && article.image !== ''
  }

  render () {
    return (
      <div className="cp-tab-content">
        <div className="ui stackable grid">
            <div className="row">
              <div className="four wide column">
              <Responsive minWidth={768}>
                {this.props.video ?
                  '' :
                  <Selector
                    items={this.state.categories}
                    onSelect={this.handleSelection.bind(this)}
                  />
                }
              </Responsive>
              </div>
              <div className="nine wide column cp-tab-content__main">
                <Icon name={this.props.icon} />
                {this.props.description}
              </div>
            </div>
          {this.props.video ? <VideoDisplay /> :
            <div className="row cp-tab-content__articlesContainer">
              {this.state.filteredArticles.map((article, index) => (
                <div
                  key={index}
                  className="five wide column cp-tab-content__article">
                  <Article data={article} />
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    )
  }
}
