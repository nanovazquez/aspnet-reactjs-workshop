using System;
using System.Linq;
using ReactMessenger.Models;
using System.Collections.Generic;

namespace ReactMessenger.Repositories
{
    public class CommentsRepository : IRepository<Comment>
    {
        public List<Comment> comments;

        public CommentsRepository()
        {
            this.comments = new List<Comment>
            {
                new Comment
                {
                    Author = "Mariano",
                    Text = "Hola .NET Conf 2016!",
                    Image = "/images/mariano.jpg"
                },
                new Comment
                {
                    Author = "Nicolas",
                    Text = "Este es otro comentario",
                    Image = "/images/nico.jpg"
                },
                 new Comment
                {
                    Author = "Diego",
                    Text = "Y este es un tercer comentario!",
                    Image = "/images/diego.jpg"
                },
            };
        }

        public IEnumerable<Comment> GetAll()
        {
            return this.comments;
        }

        public Comment Insert(Comment comment)
        {
            this.comments.Add(comment);
            return comment;
        }
    }
}
