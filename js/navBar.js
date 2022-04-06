$(document).ready(function(){
    $('#iconBtn').click(function(){
        $('ul').toggleClass('show');
        const separeteNav = document.getElementById("call");
        separeteNav.setAttribute("style", "padding-top: 250px;")
    });
});