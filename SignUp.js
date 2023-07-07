
// var  mobileno=JSON.parse(localStorage.getItem("mobileno")) || null
document.querySelector("#continue").addEventListener("click",function(){
    event.preventDefault();
    var mobile =document.querySelector("#mobileno").value
    // console.log(mobile)
    // mobileNo.push(mobile);
    // localStorage.setItem("mobileno",JSON.stringify(mobile));
    localStorage.setItem("mobileno",mobile);
    window.location.href="./verificationPage.html"
    
})

