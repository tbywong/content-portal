import React, { Component } from 'react'
import './article.scss'

const Article = ({ data }) => (
  <a href={data.article_url} target="_blank" className="cp-article">
    <img
      src={`images/${data.image}`}
      className="ui image medium" />
    <p className="cp-article__publisher">{data.publisher}</p>
  </a>
)

export default Article
