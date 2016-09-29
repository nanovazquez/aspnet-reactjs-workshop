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
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);