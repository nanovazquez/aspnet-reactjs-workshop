const data = [
  { author: "Mariano", text: "Hola .NET Conf 2016!", image: "/images/mariano.jpg" },
  { author: "Nicolas", text: "Este es otro comentario", image: "/images/nico.jpg" },
  { author: "Diego", text: "Y este es un tercer comentario!", image: "/images/diego.jpg" }
];

const CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <CommentList data={this.props.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);