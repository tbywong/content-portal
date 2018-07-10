import React, { Component } from 'react'
import { S3_URL } from '../../config/constants'
import './article.scss'

const Article = ({ data }) => (
  <a href={data.article_url} target="_blank" className="cp-article">
    <img
      src={`${S3_URL}/article_thumbnails/${data.image}`}
      className="ui image medium" />
    <p className="cp-article__publisher">{data.publisher}</p>
  </a>
)

export default Article
