import React from 'react';

import styles from '../../static/scss/_wrapper.scss';

import Header from './Header';
import Sidebar from './Sidebar';
import CommentBox from './CommentBox';
import Footer from './Footer';

var Wrapper = React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },
  render: function() {
    return (
      <main id="wrapper" className="wrapper">
        <Header />
        <Sidebar />
        <div className="page">
          {this.props.children}
        </div>
        <CommentBox url="/api/comments" pollInterval={5000} />
        <Footer />
      </main>
    );
  }
});

export default Wrapper