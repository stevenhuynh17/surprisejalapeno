import React from 'react';
import ArticleEntry from './ArticleEntry.jsx';

const NewsView = (props) => (
  <div>
    <div>
      {props.data.map((article, i) => (
        <ArticleEntry props={props} article={article} key={i} />
      ))}
    </div>
  </div>
);

NewsView.propTypes = {
  data: React.PropTypes.array
};

export default NewsView;
