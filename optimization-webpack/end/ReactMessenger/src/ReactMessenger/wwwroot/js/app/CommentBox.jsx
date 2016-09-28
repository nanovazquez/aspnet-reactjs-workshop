import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentBox = React.createClass({
  loadCommentsFromServer: function () {
    const xhr = new XMLHttpRequest();
    xhr.open('get', this.props.url, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        this.setState({ data: JSON.parse(xhr.responseText) });
      }
      window.setTimeout(this.loadCommentsFromServer, this.props.pollInterval);
    }.bind(this);

    xhr.send();
  },
  handleCommentSubmit: function (comment) {
    const data = new FormData();
    data.append('text', comment.text);
    data.append('author', comment.author);

    const xhr = new XMLHttpRequest();
    xhr.open('post', this.props.url, true);
    xhr.onload = function () {
      this.loadCommentsFromServer();
    }.bind(this);

    xhr.send(data);
  },
  getInitialState: function () {
    return { data: [] };
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
  },
  render: function() {
    return (
      <div className="commentBox">
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

export default CommentBox;