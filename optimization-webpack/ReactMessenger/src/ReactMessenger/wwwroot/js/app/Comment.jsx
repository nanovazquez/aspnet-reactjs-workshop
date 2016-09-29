import React from 'react';

const Comment = React.createClass({
  render: function () {
    const commentCssClasses = `comment ${this.props.author}`;
    return (
      <div className={commentCssClasses}>
        <div className="commentAuthor">
          <span>{this.props.author}</span>
        </div>
        <div className="commentImage">
          <img src={this.props.image} />
        </div>
        <div className="commentText">
          <span>{this.props.text}</span>
        </div>
      </div>
    );
  }
});

export default Comment;