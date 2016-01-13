import React from 'react';

import CommentBox from './CommentBox';

var Index = React.createClass({
  render: function() {
    return (
      <div className="index">
        <h1>Home</h1>
        <CommentBox url="/api/comments" pollInterval={5000} />
      </div>
    );
  }
});

export default Index