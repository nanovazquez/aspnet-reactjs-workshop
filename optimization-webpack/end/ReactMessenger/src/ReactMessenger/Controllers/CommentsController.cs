using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactMessenger.Repositories;
using ReactMessenger.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactMessenger.Controllers
{
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    [Route("api/[controller]")]
    public class CommentsController : Controller
    {
        private static IRepository<Comment> commentsRepository = new CommentsRepository();

        // GET: api/comments
        [HttpGet]
        public IEnumerable<Comment> Get()
        {
            return commentsRepository.GetAll();
        }

        // POST: api/comments
        [HttpPost]
        public Comment Post(Comment comment)
        {
            return commentsRepository.Insert(comment);
        }
    }
}
