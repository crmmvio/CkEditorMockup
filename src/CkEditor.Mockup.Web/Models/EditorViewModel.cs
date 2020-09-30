using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace CkEditor.Mockup.Web.Models
{
    public class EditorViewModel
    {
        public int TipoSelect { get; set; }
        public List<SelectListItem> ListaTipo { get; private set; }

        public EditorViewModel()
        {
            ListaTipo = new List<SelectListItem>()
            {
                new SelectListItem(){ Value = "1", Text = "Classic"},
                new SelectListItem(){ Value = "2", Text = "In Line"}
            };
        }
    }
}