import React from 'react';
import Comment from './Comment'

const CommentList = React.createClass({
  render: function() {
    const commentNodes = this.props.data.map((comment, index) => (
      <Comment 
        key={index}
        author={comment.author}
        text={comment.text}
        image={comment.image}
      />
    ));

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

export default CommentList;