import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostsIndex from './posts_index';
import PostsNew from './posts_new';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />
      </div>
    );
  }
}
