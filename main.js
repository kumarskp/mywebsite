// Show mobile menu
function showMenu() {
    document.getElementById('navbar').classList.toggle('active');
}

function removeClass() {
    document.getElementById('navbar').classList.remove('active');
}
// change navbar background on scroll
window.onscroll = function showNavbar() {
    if (pageYOffset > 194) {
        document.getElementById("navbar").classList.add("showNav");
    } else {
        document.getElementById("navbar").classList.remove("showNav");

    }
}
// modal function
function getSrc() {
    var projectbtn = document.getElementsByClassName("projectbtn");
    var modal = document.getElementById("modal");
    var imgbox = document.getElementById("img-box");
    var caption = document.getElementById("caption");
    var anchor = document.getElementById('anchor');

    for (var i = 0; i < projectbtn.length; i++) {
        projectbtn[i].addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('modal').style.display = "block"; 
            imgbox.src= this.previousElementSibling.src;
            caption.innerHTML = this.previousElementSibling.alt;
            anchor.href = this.href;
        });
    }


}
getSrc();
// close the modal
document.getElementById("closebtn").addEventListener('click',function(){
    document.getElementById('modal').style.display="none";    
});

