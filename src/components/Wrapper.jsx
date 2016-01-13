import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
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
        <Footer />
      </main>
    );
  }
});

export default Wrapper