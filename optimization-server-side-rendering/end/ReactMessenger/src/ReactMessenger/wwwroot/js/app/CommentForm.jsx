const CommentForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    const text = this.refs.text.value.trim();

    if (!text) {
      return;
    }

    this.props.onCommentSubmit({author: 'me', text: text});
    this.refs.text.value = '';
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input className="inputText" name="text" ref="text" type="text" placeholder="Write a message..." />
        <div className="actions"></div>
        <input className="inputValue" type="submit" value="Send" />
      </form>
    );
  }
});
