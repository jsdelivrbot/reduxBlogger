import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostsIndex from './posts_index';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    );
  }
}
