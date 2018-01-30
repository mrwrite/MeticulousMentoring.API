﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeticulousMentoring.API.Data.Entities
{
    public class Course
    {
        public int id { get; set; }
        public Classification course_classification { get; set; }
        public School course_school { get; set; }
        public string course_name { get; set; }
        public DateTime? created_on { get; set; }
        public DateTime? modified_on { get; set; }
    }
}
