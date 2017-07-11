import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        PostsShow
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, { match }) => (
  { post: posts[match.params.id] }
);

export default connect(mapStateToProps, { fetchPost })(PostsShow);
