import React, { Component } from 'react'
import './article.scss'


const Article = ({ data }) => {
  const s3Url = 'https://s3.amazonaws.com/stack-content-portal/article_thumbnails'

  return (
    <a href={data.article_url} target="_blank" className="cp-article">
      <img
        src={`${s3Url}/${data.image}`}
        className="ui image medium" />
      <p className="cp-article__publisher">{data.publisher}</p>
    </a>
  )
}

export default Article
