import React from 'react';
import marked from 'marked';

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

export default CommentForm

// export default class CommentForm extends React.Component {

//   state = { author: '', text: '' };

//   //getInitialState: function() {
//   // getInitialState() {
//   //   return {author: '', text: ''};
//   // }
//   //},

//   //handleAuthorChange: function(e) {
//   handleAuthorChange(e) {
//     this.setState({author: e.target.value});
//   }
//   //},

//   //handleTextChange: function(e) {
//   handleTextChange(e) {
//     this.setState({text: e.target.value});
//   }
//   //},

//   //handleSubmit: function(e) {
//   handleSubmit(e) {
//     e.preventDefault();
//     var author = this.state.author.trim();
//     var text = this.state.text.trim();
//     if ( !text || !author ) {
//       return;
//     }
//     this.props.onCommentSubmit({author: author, text: text});
//     this.setState({author: '', text: ''});
//   }
//   //},

//   render() {
//   //render: function() {
//     return (
//       <form className="commentForm" onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your name"
//           value={this.state.author}
//           onChange={this.handleAuthorChange}
//         />
//         <input
//           type="text"
//           placeholder="Say something..."
//           value={this.state.text}
//           onChange={this.handleTextChange}
//         />
//         <input type="submit" value="Post" />
//       </form>
//     )//;
//   }
// }//);