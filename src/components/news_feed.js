import React, { Component } from 'react';

import Article from './article';

export default class NewsFeed extends Component {
  componentWillMount() {
    if (!this.props.todays_news) {
      this.props.fetchNews();
    }
  }
  render() {
    const { todays_news, provider_news, term_results } = this.props;
    const active_articles = provider_news === null && term_results === null ?
                            todays_news :
                            provider_news !== null && term_results === null ?
                            provider_news.news :
                            provider_news === null && term_results !== null ?
                            term_results.news :
                            term_results !== null && provider_news !== null &&
                            term_results.timestamp > provider_news.timestamp ?
                            term_results.news :
                            provider_news.news;

    //console.log(active_articles);
    if (!active_articles) {
      return <div>Loading...</div>
    }
    return (
      <section className="news_feed">
        { active_articles.map((article, i) => <Article key={i} i={i} article={article} {...this.props} />) }
      </section>
    );
  }
}
