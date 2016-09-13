import React from 'react';

const ArticleEntry = (props) => (
  <div>
    <h4>{props.article.name}</h4>
  </div>
);

ArticleEntry.propTypes = {
  article: React.PropTypes.object
};

export default ArticleEntry;
