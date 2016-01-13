import React from 'react';

export default class Footer extends React.Component {
  render() {
    var year = (new Date()).getFullYear();
    return (
      <footer className="footer">
        &copy; Me {year}
      </footer>
    );
  }
}