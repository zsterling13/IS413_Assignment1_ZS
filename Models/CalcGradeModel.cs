using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IS413_Assignment1_ZS.Models
{
    public class CalcGradeModel
    {
        [Required, Range(0,100)]
        public float assignments { get; set; }
        public float groupProj { get; set; }
        public float quizzes { get; set; }
        public float exams { get; set; }
        public float intex { get; set; }
    }
}
