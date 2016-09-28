using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactMessenger.Repositories;
using ReactMessenger.Models;

namespace ReactMessenger.Controllers
{
    public class HomeController : Controller
    {
        private static IRepository<Comment> commentsRepository = new CommentsRepository();

        public IActionResult Index()
        {
            var data = commentsRepository.GetAll();
            return View(data);
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
