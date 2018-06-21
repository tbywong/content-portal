const raw = require('../static/json/raw.json');

function filterBy(articles, type) {
  return articles.filter(article => article.content_type === type)
}

export const standard = filterBy(raw, 'Standard')
export const premium = filterBy(raw, 'Premium')
