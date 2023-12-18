let homeBtn1 = document.getElementById('home_button1')
let homeBtn2 = document.getElementById("home_button2")
let submitBtn = document.getElementById("submit")
let menuBar = document.getElementById("header__menubar")
homeBtn1.addEventListener("click" , function(){
    let mycv = "image\nardicv.pdf";
    let link = document.createElement("a");
    link.href = mycv;
    link.download = "nardicv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("it is wotk")
    
})
homeBtn2.addEventListener("click", function(){
    var email = 'nardoschachidaniel@gmail.com';
    var subject = 'Hiring Inquiry';
    var mailtoUrl = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);
    window.location.href = mailtoUrl;
})
submitBtn.addEventListener("click", function(){
    let first_name = document.getElementById("fnameInput").value;
    let last_name = document.getElementById("lnameInput").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("contact_comment").value;
    let mailtoLink =  `mailto:nardoschachidaniel@gmail.com?subject= Want    to Contact&body=Name: ${first_name + " "+ last_name}%0D%0AEmail: ${email}%0D%0AComment: ${comment}`;
    window.location.href = mailtoLink;
    document.getElementById('fnameInput').value = '';
    document.getElementById('lnameInput').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contact_comment').value = '';
})
menuBar.addEventListener("click",function(){
    let headerMain = document.getElementById("header__main");
    headerMain.style.display = (headerMain.style.display === "block") ? "none" : "block";
    e.stopPropagation();
})
document.body.addEventListener('click', function(e) {
    let headerMain = document.getElementById("header__main");
    if (e.target.id !== 'header__main' && e.target.id !== 'header__menubar') {
        headerMain.style.display = 'none';
    }
})



 