window.addEventListener("scroll", function()
{
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})


document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('img');

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("loading", "lazy");
    }
    });

