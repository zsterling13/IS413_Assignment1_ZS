using IS413_Assignment1_ZS.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IS413_Assignment1_ZS.Controllers
{
    public class HomeController : Controller
    {
        /* Route for default home page*/
        public IActionResult Index()
        {
            return View();
        }

        /* Route for initial visit to Grade Calculator page*/
        [HttpGet("CalcGrade")]
        public IActionResult CalcGrade ()
        {
            return View();
        }

        /* Route for when the user submits the Grade Calculator form*/
        [HttpPost("CalcGrade")]
        public IActionResult CalcGrade(CalcGradeModel model)
        {
            return View();
        }
    }
}
