import React from 'react';
//import { Link } from 'react-router';

export default class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <ul>
          <li><a href="/about">About</a></li>
        </ul>
      </aside>
    )
  }
}