import React from 'react';
import marked from 'marked';

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
        <h5 className="commentAuthor">
          {this.props.author}
        </h5>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <hr/>
      </div>
    );
  }
});

export default Comment